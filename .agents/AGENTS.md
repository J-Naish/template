# Template – Technical Requirements & Principles

## Architecture Principles
- Backend is the single source of truth
- Frontend focuses on UI and user experience only
- Long-running or failure-prone work must be asynchronous
- Prefer portable, standards-based infrastructure

## Frontend
- Stack: Next.js (App Router), React, Tailwind CSS, shadcn/ui, Framer Motion
- Deployment: Vercel
- Role:
  - UI rendering (SSR/CSR)
  - BFF / API proxy for the backend
- No direct database access or business logic

## Backend
- Stack: Hono (Cloudflare Workers), Better Auth, Drizzle ORM, Neon (PostgreSQL)
- Role:
  - Authentication and authorization
  - Business logic and data access
  - Long-running AI job orchestration
- Owns all persistent state and rules

## Database
- PostgreSQL (Neon)
- Relational, tenant-aware schema
- Designed for future portability

## Monorepo
- Tooling: pnpm workspaces + Turborepo
- Structure:
  - apps/web: Next.js frontend
  - apps/server: Hono backend
  - apps/e2e: Playwright end-to-end tests
  - packages/ui: shadcn/ui components
- Shared ESLint, Prettier, and TypeScript config at root

---

# Available Skills (`.agents/skills/`)

Reference guide for custom skills available in the project. Each skill has a specific purpose and trigger context.

## AI & Web Development

| Skill | Overview | When to Use |
|-------|----------|-------------|
| **ai-elements** | Create AI chat UI components for the ai-elements library with shadcn/ui integration | Adding components to ai-elements library |
| **ai-sdk** | Build AI-powered features with Vercel AI SDK (text generation, streaming, tool calling, agents) | Implementing AI functionality (generateText, streamText, useChat) |
| **better-auth-best-practices** | Integrate Better Auth framework for TypeScript authentication (OAuth, Magic Links, Passkeys) | Setting up authentication with Better Auth |
| **frontend-design** | Create production-grade frontend interfaces with high design quality | Building websites, landing pages, dashboards, React components |

## Next.js & React

| Skill | Overview | When to Use |
|-------|----------|-------------|
| **next-best-practices** | Next.js best practices for file conventions, RSC boundaries, data patterns, metadata, error handling | Writing or reviewing Next.js code |
| **next-cache-components** | Configure Next.js 16+ Cache Components with PPR, use cache directive, cacheLife, cacheTag | Using Partial Prerendering and caching |
| **vercel-react-best-practices** | Optimize React/Next.js performance (async patterns, bundle optimization, re-render optimization) | Performance optimization and code review |

## Cloudflare & Backend

| Skill | Overview | When to Use |
|-------|----------|-------------|
| **cloudflare** | Comprehensive Cloudflare platform guide (Workers, Pages, KV, D1, R2, AI, Tunnel, WAF, etc.) | Any Cloudflare service development |
| **wrangler** | Cloudflare Workers CLI for deployment, development, and resource management | Running wrangler commands and configuration |
| **workers-best-practices** | Production-ready Workers code patterns (streaming, global state, secrets, bindings) | Writing or reviewing Workers code |
| **hono** | Efficient Hono framework development with CLI search, API reference, request testing | Building Hono applications |

## Database & Infrastructure

| Skill | Overview | When to Use |
|-------|----------|-------------|
| **neon-postgres** | Neon Serverless Postgres guides (getting started, connection methods, features, CLI) | Working with Neon databases |
| **supabase-postgres-best-practices** | Postgres performance optimization (queries, indexes, connection pooling, security) | Writing, optimizing, and reviewing Postgres queries and schemas |
| **turborepo** | Turborepo monorepo build system guidance (tasks, caching, filtering, dependencies) | Configuring and optimizing monorepo structure |

## Testing & Quality

| Skill | Overview | When to Use |
|-------|----------|-------------|
| **webapp-testing** | Test local web applications with Playwright (UI verification, browser automation) | Frontend testing and automation |

## Operations & Observability

| Skill | Overview | When to Use |
|-------|----------|-------------|
| **sentry-fix-issues** | Find and fix production issues from Sentry (analyze stack traces, identify root causes) | Resolving Sentry errors and production bugs |
| **sentry-setup-logging** | Setup Sentry structured logging (capture logs, integrate logging libraries) | Adding Sentry logging to projects |
| **sentry-setup-tracing** | Setup Sentry performance monitoring (transactions, spans, latency measurement) | Enabling tracing and performance monitoring |
| **skill-creator** | Guide for creating new custom skills (workflows, resources, design patterns) | Creating or updating custom skills |

## Quick Selection Guide

### By Development Task
- **UI/Frontend** → `frontend-design` + `next-best-practices`
- **API/Backend** → `hono` + `workers-best-practices`
- **Performance** → `vercel-react-best-practices` + `supabase-postgres-best-practices`
- **AI Features** → `ai-sdk` + `ai-elements`
- **Authentication** → `better-auth-best-practices`

### Code Review & Debugging
- **Security** → `security-review`
- **Production Errors** → `sentry-fix-issues`
- **Code Quality** → `workers-best-practices` or relevant framework skill

### Infrastructure & Operations
- **Cloudflare** → `cloudflare` + `wrangler`
- **Monorepo** → `turborepo`
- **Monitoring** → `sentry-setup-logging`, `sentry-setup-tracing`
- **Testing** → `webapp-testing`

