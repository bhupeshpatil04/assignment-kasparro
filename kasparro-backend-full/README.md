# Kasparro Assignment – Coin Ingestion Service

## Overview
A Node.js + TypeScript service that ingests cryptocurrency data from multiple
external APIs, normalizes it, and stores it in PostgreSQL using Prisma.

## Implemented Features
- Multi-source coin ingestion
- Source-aware metadata storage
- Data normalization using Prisma ORM
- Dockerized local environment
- Automatic ingestion on service startup

## Tech Stack
- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Docker

## API Endpoints
### Health Check
GET /health

### Manual Ingestion Trigger
POST /ingest

## Running Locally
```bash
docker-compose up --build
