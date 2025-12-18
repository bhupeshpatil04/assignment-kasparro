"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingestCoinPaprika = ingestCoinPaprika;
const etl_service_1 = __importDefault(require("./etl.service"));
async function ingestCoinPaprika() {
    const res = await fetch("https://api.coinpaprika.com/v1/tickers");
    const data = await res.json();
    return data.map((coin) => (0, etl_service_1.default)({
        name: coin.name,
        symbol: coin.symbol,
        price_usd: coin.quotes?.USD?.price
    }, "coinpaprika"));
}
//# sourceMappingURL=coinpaprika.service.js.map