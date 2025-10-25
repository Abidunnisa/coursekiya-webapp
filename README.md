# Coursekiya Clone (Next.js + TypeScript + Postgres)

## Quick start
1. Install deps: `npm install`
2. Create a .env file with:
   ```
   DATABASE_URL=postgres://user:pass@host:5432/dbname
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```
3. Run DB migrations / run the SQL in `prisma/schema.sql` (psql or PgAdmin).
4. `npm run dev`

## Notes about the Postgres connection
- The file `server/db.ts` uses `pg`'s Pool and reads `DATABASE_URL` from env.
- For production, provide a managed Postgres URL and ensure SSL if required.

## Extending to real auth and payments
- Replace the in-memory cart with a `carts` table or `orders` + `order_items` persisted in Postgres.
- Use JWT or a session store for auth. The `jsonwebtoken` + `bcrypt` packages are included to get started.
- For payments integrate with Stripe (server-side) to create checkout sessions.
