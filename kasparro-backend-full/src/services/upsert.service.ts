import prisma from "../prisma";

export async function upsertCoins(coins: any[]) {
  for (const c of coins) {
    const existing = await prisma.coin.findUnique({
      where: { symbol: c.symbol },
    });

    await prisma.coin.upsert({
      where: { symbol: c.symbol },
      create: {
        symbol: c.symbol,
        name: c.name,
        priceUsd: c.priceUsd,
        meta: c.meta,
      },
      update: {
        name: c.name,
        priceUsd: c.priceUsd,
        meta: {
          ...(existing?.meta ?? {}),
          ...c.meta,
        },
      },
    });
  }
}
