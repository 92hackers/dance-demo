/**
 * Databse service
 *
 * Currently, we will use Prisma ORM
 *
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma
