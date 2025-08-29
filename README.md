# DHP Ops DD Auditor

Monorepo for the Due Diligence Audit web application. Mobile-first, offline-capable PWA with an API, Postgres, and S3-compatible storage.

## Stack
- Web: Next.js 14 (App Router, TypeScript)
- API: Node.js (Express, TypeScript)
- DB: Postgres 16
- Object Storage: MinIO (S3-compatible)
- Container: Docker + Compose

## Quick start (Docker)
1. Copy envs and adjust as needed:
   - Create a `.env` in the repo root (see variables in `docker-compose.yml`).
2. Build and run:
```bash
docker compose up -d --build
```
3. Services:
   - Web: http://localhost:3000
   - API: http://localhost:4000/health
   - Postgres: localhost:5432
   - MinIO: http://localhost:9000 (console: http://localhost:9001)

## Local development
You can run services individually as they evolve. Install Node 20+ and PNPM/NPM.

### API
```bash
cd api
npm install
npm run dev
```

### Web
```bash
cd web
npm install
npm run dev
```

## Deployment notes (Debian VPS, Docker)
- Use Docker Compose on the VPS. Consider reverse proxy (Caddy/Traefik/Nginx) for TLS and domains.
- Store secrets via environment variables or a secret manager. Never commit credentials.
- Mount volumes for Postgres and MinIO for durability.

## Next steps
- Flesh out API endpoints, DB schema (Prisma), and storage presign flows.
- Implement PWA features and offline cache in the Web app.
