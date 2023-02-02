/**
 * Login api
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
    return res.status(400).json({ error: '密码或邮箱错误' })
  }

  let profile = null
  // Query db with email to find record
  try {
    profile = await prisma.user.findUnique({ where: { email } })
    if (!profile) {
      return res.status(400).json({ error: '邮箱不存在' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: '服务器错误' })
  }

  // Validate password
  const validatePasswd = await bcrypt.compare(password, profile.passwordHash)
  if (!validatePasswd) {
    return res.status(400).json({ error: '密码错误' })
  }

  // Store token in cookie
  const token = await bcrypt.genSalt(4)
  res.setHeader('Set-Cookie', `token=${token}; userId=${profile.id}; username=${profile.name}`)

  // Store the token
  try {
    await prisma.login.create({
      data: {
        token,
        userId: profile.id,
      },
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: '服务器错误' })
  }

  // Response with user id
  res.status(200).json({ id: profile.id })
}