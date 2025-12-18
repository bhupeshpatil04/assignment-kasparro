import etlProcess from "./etl.service";

export async function ingestCoinGecko() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );
  const data = await res.json();

  return data.map((coin: any) =>
    etlProcess(
      {
        name: coin.name,
        symbol: coin.symbol,
        price_usd: coin.current_price
      },
      "coingecko"
    )
  );
}
