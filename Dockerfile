# Dockerfile for wu-zhi-le
#
# Reference:
# 1. https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
# 2. https://nextjs.org/docs/advanced-features/output-file-tracing
#

#------------------------
# deps: Install dependencies
#------------------------
FROM node:lts-alpine3.16 AS deps
RUN npm install pnpm -g --registry=https://registry.npm.taobao.org/

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --registry=https://registry.npm.taobao.org/

#------------------------
# builder: Build artifacts
#------------------------
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Generate prisma clients.
RUN npx prisma generate

RUN pnpm build

#------------------------
# Final production image
#------------------------
ENV NODE_ENV production
ENV PORT 3000

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 app
# RUN adduser --system --uid 1001 app

# Copy all artifacts
# COPY --from=builder /dance/public ./public
# COPY --from=builder /dance/package.json ./package.json
# COPY --from=builder --chown=app:app /dance/.next/standalone ./
# COPY --from=builder --chown=app:app /dance/.next/static ./.next/static

# USER app

EXPOSE 3000
CMD ["node", "server.js"]