"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertCoins = upsertCoins;
const prisma_1 = __importDefault(require("../prisma"));
async function upsertCoins(coins) {
    const ops = coins.map(c => prisma_1.default.coin.upsert({
        where: { canonicalKey: c.canonicalKey },
        create: {
            name: c.name,
            symbol: c.symbol,
            canonicalKey: c.canonicalKey,
            meta: c
        },
        update: {
            name: c.name,
            meta: c
        }
    }));
    await prisma_1.default.$transaction(ops);
}
//# sourceMappingURL=upsert.service.js.map