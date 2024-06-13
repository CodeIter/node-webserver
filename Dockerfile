# Dockerfile
# syntax=docker/dockerfile:1

# Stage 1: pnpm-installer
FROM node:alpine AS pnpm-installer

WORKDIR /app

# Enable corepack
RUN corepack enable

# Install and activate pnpm@latest
RUN corepack prepare pnpm@latest --activate

# Stage 2: builder
FROM node:alpine AS builder

USER nobody

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install --production

# Stage 3: app
FROM node:alpine AS app

USER nobody

WORKDIR /app

# Copy dependencies from pnpm-installer stage
COPY --from=builder /app/node_modules .

COPY . .

ENTRYPOINT ["node", "server.js"]

