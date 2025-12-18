"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canonicalKey = canonicalKey;
function canonicalKey(name, symbol) {
    if (symbol && symbol.trim()) {
        return symbol.trim().toUpperCase();
    }
    return name.trim().toLowerCase().replace(/\s+/g, "");
}
//# sourceMappingURL=canonical.service.js.map