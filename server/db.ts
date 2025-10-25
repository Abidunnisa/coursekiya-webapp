import pkg from 'pg'
const { Pool } = pkg

const connectionString = process.env.DATABASE_URL || ''
if (!connectionString) {
  console.warn('WARNING: DATABASE_URL is not set. DB queries will fail until configured.')
}

export const pool = new Pool({ connectionString, ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false })

export async function query(text: string, params?: any[]) {
  const client = await pool.connect()
  try {
    const res = await client.query(text, params)
    return res
  } finally {
    client.release()
  }
}
