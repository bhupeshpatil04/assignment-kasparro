"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingest_controller_1 = require("../controllers/ingest.controller");
const router = (0, express_1.Router)();
router.post("/external", ingest_controller_1.ingestExternal);
exports.default = router;
//# sourceMappingURL=ingest.routes.js.map