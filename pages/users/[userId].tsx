/**
 * User home page
 */

import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import useProfile from '../../hooks/useProfile'

export default function UserHomepage() {
  const router = useRouter()
  const { userId = '' } = router.query
  const { profile, isLoading, setUserId } = useProfile({ redirectTo: '/login' })

  // Set user id
  useEffect(() => {
    setUserId(userId.toString())
  }, [userId])

  if (isLoading || !profile || !profile.id) {
    return (
      <>
        <div className="min-h-screen">
          <div className="container flex align-middle items-center justify-center">
            <h1 className='pt-10'>用户主页, 数据加载中...</h1>
          </div>
        </div>
      </>
    )
  }

  const { wallet } = profile
  const balance = wallet ? wallet.balance : 0

  return (
    <>
      <Head>
        <title>我的主页 | 成都舞之乐文化传播有限公司</title>
      </Head>
      <div className="min-h-screen">
        <div className="container pt-10">
          <div className="profile mb-24">
            <h1 className='text-4xl mb-5'>我的主页</h1>
            <p className='mb-5'>欢迎回来：{profile.name}</p>
            <p className='text-slate'>当前账户余额：{balance}</p>
          </div>
          <div className="videos">
            <h1 className='text-2xl mb-5'>播放列表</h1>
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  )
}