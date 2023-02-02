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
  const { data, error, isLoading } = useSWR(userId ? `/profile/${userId}` : null, fetcher)

  if (isLoading) {
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

  if (!data) {
    // TODO: redirect to /
    if (window) {
      router.push('/')
    }
  }

  return (
    <>
      <Head>
        <title>我的主页 | 成都舞之乐文化传播有限公司</title>
      </Head>
      <div className="min-h-screen">
        <div className="container">
          <h1>用户主页</h1>
        </div>
      </div>
    </>
  )
}