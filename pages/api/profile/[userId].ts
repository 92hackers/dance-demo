/**
 * User Profile
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { LoginStatus } from '../../../utils'

import prisma from '../../../utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'GET') {
    return res.status(405)
  }

  const { query, cookies } = req

  const { userId } = query
  const { token } = cookies

  if (!userId || !token) {
    return res.status(401).json({ error: '缺少用户 id 或者是访问凭证' })
  }

  // Get user profile from login and user models. no select password hash
  const record = await prisma.login.findFirst({
    where: {
      userId: parseInt(userId.toString(), 10),
      token,
      status: LoginStatus.ACTIVE,
    },
    include: {
      user: {
        select: {
          wallet: true,
          id: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      }
    },
  })

  if (!record) {
    return res.status(400).json({ error: '用户没有找到' })
  }

  if (!record.id) {
    return res.status(400).json({ error: '用户没有找到' })
  }

  const { user }  = record
  res.status(200).json(user)
}