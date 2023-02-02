/**
 * Logout
 */

import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const { cookies } = req
  console.log(cookies);

  // Validate token from cookie

  // Unset cookies

  // Clear Login record, make it status logout

  // Response
}