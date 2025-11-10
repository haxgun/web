FROM oven/bun:alpine as builder

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build
FROM oven/bun:alpine

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --production --frozen-lockfile

COPY --from=builder /app/dist ./dist

EXPOSE 4321

ENV HOST=0.0.0.0
ENV PORT=4321

CMD ["bun", "run", "./dist/server/entry.mjs"]
