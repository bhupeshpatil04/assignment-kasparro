import { Request, Response } from "express";
import { ingestCoinGecko } from "../services/coingecko.service";
import { ingestCoinPaprika } from "../services/coinpaprika.service";
import { upsertCoins } from "../services/upsert.service";

export async function ingestExternal(req: Request, res: Response) {
  try {
    const cg = await ingestCoinGecko();
    const cp = await ingestCoinPaprika();

    await upsertCoins([...cg, ...cp]);

    res.json({
      status: "ok",
      coingecko: cg.length,
      coinpaprika: cp.length
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "External ingestion failed" });
  }
}
