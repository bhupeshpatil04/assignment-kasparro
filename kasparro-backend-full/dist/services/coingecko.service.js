"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingestCoinGecko = ingestCoinGecko;
const etl_service_1 = __importDefault(require("./etl.service"));
async function ingestCoinGecko() {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    const data = await res.json();
    return data.map((coin) => (0, etl_service_1.default)({
        name: coin.name,
        symbol: coin.symbol,
        price_usd: coin.current_price
    }, "coingecko"));
}
//# sourceMappingURL=coingecko.service.js.map