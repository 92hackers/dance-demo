/**
 * Charge the wallet
 *
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body)
  const { amount, userId } = body

  if (!amount) {
    return res.status(400).json({ error: '充值金额错误！' })
  }
  if (!userId) {
    return res.status(400).json({ error: 'Please submit your user id' })
  }

  const userWallet = await prisma.wallet.findUnique({
    where: {
      ownerId: userId,
    },
  })

  const newBalance = userWallet && userWallet.balance ? userWallet.balance + amount : amount

  try {
    // Wraps multiple requests in a single transaction
    await prisma.$transaction([
      prisma.wallet.upsert({
        where: {
          ownerId: userId,
        },
        update: {
          balance: newBalance,
        },
        create: {
          balance: newBalance,
          ownerId: userId,
        },
      }),
      prisma.transaction.create({
        data: {
          amount,
          ownerId: userId,
        }
      }),
    ])
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: '服务器错误' })
  }

  res.status(200).json({ data: 'ok' })
}