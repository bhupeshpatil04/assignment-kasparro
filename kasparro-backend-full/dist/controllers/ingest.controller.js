"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingestExternal = ingestExternal;
const coingecko_service_1 = require("../services/coingecko.service");
const coinpaprika_service_1 = require("../services/coinpaprika.service");
const upsert_service_1 = require("../services/upsert.service");
async function ingestExternal(req, res) {
    try {
        const cg = await (0, coingecko_service_1.ingestCoinGecko)();
        const cp = await (0, coinpaprika_service_1.ingestCoinPaprika)();
        await (0, upsert_service_1.upsertCoins)([...cg, ...cp]);
        res.json({
            status: "ok",
            coingecko: cg.length,
            coinpaprika: cp.length
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "External ingestion failed" });
    }
}
//# sourceMappingURL=ingest.controller.js.map