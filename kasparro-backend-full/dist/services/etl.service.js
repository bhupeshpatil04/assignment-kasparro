"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = etlProcess;
const canonical_service_1 = require("./canonical.service");
function etlProcess(raw, source) {
    const name = String(raw.name || raw.coin_name || "").trim();
    const symbol = String(raw.symbol || "").trim().toUpperCase();
    return {
        name,
        symbol,
        canonicalKey: (0, canonical_service_1.canonicalKey)(name, symbol),
        priceUsd: raw.price_usd != null ? Number(raw.price_usd) : null,
        source,
        raw
    };
}
//# sourceMappingURL=etl.service.js.map