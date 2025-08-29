FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then npm i -g pnpm@8 && pnpm i --frozen-lockfile; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else npm i; fi

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build || yarn build || pnpm build

FROM base AS runtime
ENV NODE_ENV=production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./package.json
EXPOSE 4000
CMD ["node", "dist/index.js"]

