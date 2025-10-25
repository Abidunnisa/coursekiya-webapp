import type { NextApiRequest, NextApiResponse } from 'next'

let cart: Array<{ courseId: number; qty: number }> = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') return res.status(200).json(cart)
  if (req.method === 'POST') {
    const { courseId } = req.body
    const existing = cart.find((c) => c.courseId === courseId)
    if (existing) existing.qty += 1
    else cart.push({ courseId, qty: 1 })
    return res.status(201).json(cart)
  }
  if (req.method === 'DELETE') {
    const { courseId } = req.body
    cart = cart.filter((c) => c.courseId !== courseId)
    return res.status(200).json(cart)
  }
  res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
