/**
 * Login api
 */

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const { email, password } = JSON.parse(req.body)

  if (!email || !password) {
    return res.status(400).json({ error: '密码或邮箱错误' })
  }

  // Query db with email to find record

  // Validate password
  console.log( email, password );

  // Set cookies

  // Response
  res.status(200).json({ data: 'ok' })
}
