/**
 * User home page
 */

import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { fetcher } from '../../utils/http'

export default function aboutUs() {
  const router = useRouter()
  const { userId } = router.query
  const { data: profile, isLoading } = useSWR(userId ? `/profile/${userId}` : null, fetcher)

  useEffect(() => {
    if (userId) {
      if (!isLoading && profile.error) { // Redirect to login page
        router.push('/login')
      }
    }
  }, [profile, isLoading, userId])

  if (isLoading || !profile || profile.error) {
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
            <h1 className='text-4xl mb-5'>用户主页</h1>
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