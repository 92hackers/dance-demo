/**
 * Creates a new account
 */

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const { username, email, password } = JSON.parse(req.body)

  if (!username || !email || !password) {
    return res.status(400).json({ error: '请输入正确的用户名、邮箱、密码' })
  }

  console.log( email, password );

  res.status(200).json({ email: email, password: password })
  // res.status(200).json({ error: 'Invalid' })
}
