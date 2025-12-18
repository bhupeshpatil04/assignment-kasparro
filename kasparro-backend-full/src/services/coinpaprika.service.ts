import etlProcess from "./etl.service";

export async function ingestCoinPaprika() {
  const res = await fetch("https://api.coinpaprika.com/v1/tickers");
  const data = await res.json();

  return data.map((coin: any) =>
    etlProcess(
      {
        name: coin.name,
        symbol: coin.symbol,
        price_usd: coin.quotes?.USD?.price
      },
      "coinpaprika"
    )
  );
}
