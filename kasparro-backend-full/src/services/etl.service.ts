import { canonicalKey } from "./canonical.service";

export type NormalizedCoin = {
  name: string;
  symbol: string;
  canonicalKey: string;
  priceUsd: number | null;
  source: string;
  raw: any;
};

export default function etlProcess(raw: any, source: string): NormalizedCoin {
  const name = String(raw.name || raw.coin_name || "").trim();
  const symbol = String(raw.symbol || "").trim().toUpperCase();

  return {
    name,
    symbol,
    canonicalKey: canonicalKey(name, symbol),
    priceUsd: raw.price_usd != null ? Number(raw.price_usd) : null,
    source,
    raw
  };
}
