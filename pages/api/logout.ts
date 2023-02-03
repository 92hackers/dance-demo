/**
 * Logout
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { LoginStatus } from '@prisma/client'

import prisma from '../../utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const { cookies } = req
  const { token = '', userId = 0 } = cookies

  if (!userId || !token) {
    return res.status(401).json({ error: '缺少用户 id 或者是访问凭证' })
  }

  console.log(userId, token);

  // Update Login status
  // Clear Login record, make it status logout
  try {
    await prisma.login.updateMany({
      where: {
        token,
        userId: parseInt(userId, 10),
        status: LoginStatus.ACTIVE,
      },
      data: {
        status: LoginStatus.LOGOUT
      }
    })
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: '用户 id 或者是访问凭证错误' })
  }

  // Unset cookies
  res.setHeader('Set-Cookie', [
    `token=; path=/; HttpOnly`,
    `userId=; path=/;`,
    `username=; path=/;`,
  ])

  // Response
  res.status(200).json({ data: 'ok' })
}