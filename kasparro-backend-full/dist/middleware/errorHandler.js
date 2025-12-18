"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal server error" });
}
//# sourceMappingURL=errorHandler.js.map