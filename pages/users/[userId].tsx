/**
 * User home page
 */

import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import useProfile from '../../hooks/useProfile'

export default function UserHomepage() {
  const router = useRouter()
  const [showChargeQrCode, setShowChargeQrCode] = useState<boolean>(false)
  const [showRefund, setShowRefund] = useState<boolean>(false)
  const { userId = '' } = router.query
  const { profile, isLoading, setUserId } = useProfile({ redirectTo: '/login' })

  // Set user id
  useEffect(() => {
    setUserId(userId.toString())
  }, [userId])

  function handleCharge() {
    setShowRefund(false)
    setShowChargeQrCode(!showChargeQrCode)
  }

  function handleRefund() {
    setShowChargeQrCode(false)
    setShowRefund(!showRefund)
  }

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
            <p className='mb-5'><span className='text-slate-500'>欢迎回来：</span> {profile.name}</p>
            <p className='mb-5'><span className='text-slate-500'>我的用户 ID 是：</span> {profile.id}</p>
            <p className='mb-5'><span className='text-slate-500'>当前账户余额：</span> {balance}</p>
            <div className="mb-5">
              <button onClick={handleCharge} type="button" className="transition leading-none inline-block px-5 text-white h-10 w-20 cursor-pointer rounded-lg ring-inset bg-[#c00]">
                <span>充值</span>
              </button>
              <button onClick={handleRefund} type="button" className="transition ml-5 leading-none inline-block px-5 text-[#c00] h-10 w-20 cursor-pointer rounded-lg ring-inset border">
                <span>退款</span>
              </button>
            </div>
            <div className="mb-5">
              {
                showChargeQrCode && (
                  <div className="qrcode">
                    <p className='mb-5'>1. 使用支付宝扫描以下付款码进行充值，充值完成后联系客服告知充值金额和上方用户 ID 即可完成充值操作。</p>
                    <p className='mb-5'>2. 再次单击上方的 充值 按钮以关闭收款二维码。</p>
                    <Image
                      width={500}
                      height={300}
                      src={`/charge-qrcode.jpg`}
                      alt='Charge qrcode'
                    />
                  </div>
                )
              }
            </div>
            <div className="mb-5">
              {
                showRefund && (
                  <div className="refund">
                    <p className='mb-5'>1. 请联系客户告知用户 ID 办理退款流程。</p>
                  </div>
                )
              }
            </div>
          </div>
          <div className="videos mb-24">
            <h1 className='text-2xl mb-5'>播放列表</h1>
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  )
}