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
   - For multi-app VPS, to avoid port clashes, set `HOST_BIND_ADDRESS=127.0.0.1` so services only bind locally. Front with a reverse proxy.
2. Build and run:
```bash
docker compose up -d --build
```
3. Services (local binds by default):
   - Web: http://127.0.0.1:3000
   - API: http://127.0.0.1:4000/health
   - Postgres: not exposed (use the network)
   - MinIO: http://127.0.0.1:9000 (console: http://127.0.0.1:9001)

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
- Use Docker Compose on the VPS. Put Caddy/Traefik/Nginx in front for TLS and domains.
- Store secrets via environment variables or a secret manager. Never commit credentials.
- Mount volumes for Postgres and MinIO for durability.
- On busy VPSs, keep `HOST_BIND_ADDRESS=127.0.0.1` and publish via reverse proxy to avoid port conflicts.

## Next steps
- Flesh out API endpoints, DB schema (Prisma), and storage presign flows.
- Implement PWA features and offline cache in the Web app.
