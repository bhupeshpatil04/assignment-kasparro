import { ingestAll } from "./controllers/ingest.controller";

async function startServer() {
  try {
    console.log("Starting ingestion...");
    await ingestAll();
  } catch (err) {
    console.error("Initial ingestion failed", err);
  }

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

startServer();
