/**
 * Reset password
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

import prisma from '../../utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const { email, password } = JSON.parse(req.body)

  if (!email || !password) {
    return res.status(400).json({ error: '请输入正确的邮箱、密码' })
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create new account
  try {
    await prisma.user.update({
      where: { email: email },
      data: { passwordHash: hashedPassword },
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: '邮箱重复或数据库错误！' })
  }

  return res.status(200).json({ data: 'ok' })
}