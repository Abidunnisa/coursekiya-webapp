import type { NextApiRequest, NextApiResponse } from 'next'
import { query } from '../../server/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await query('SELECT id, title, summary, price, image FROM courses ORDER BY id DESC LIMIT 50')
    res.status(200).json(result.rows)
  } catch (err) {
    console.error(err)
    // Fallback: return sample data if DB not configured
    res.status(200).json([
      { id: 1, title: 'Sample Course 1', summary: 'Intro course', price: 499.00 },
      { id: 2, title: 'Sample Course 2', summary: 'Advanced topics', price: 999.00 },
    ])
  }
}
