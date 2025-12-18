import { Router } from "express";
import { ingestExternal } from "../controllers/ingest.controller";

const router = Router();

router.post("/external", ingestExternal);

export default router;
