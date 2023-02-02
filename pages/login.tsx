/**
 * Login
 */

import { useState, useEffect } from 'react'
import useSWRMutation from 'swr/mutation'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { creator } from '../utils/http'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { trigger, isMutating } = useSWRMutation('/login', creator)
  const router = useRouter()

  async function handleSubmit() {
    if (!email) {
      return alert('请输入邮箱')
    }
    if (!password) {
      return alert('请输入密码')
    }

    const result = await trigger({ email, password }).catch(e => e)

    if (result.error) {
      return alert(result.error)
    }

    // Redirect to user home page
    router.push(`/users/${result.id}`)
  }

  return (
    <>
      <Head>
        <title>登录 | 成都舞之乐文化传播有限公司</title>
      </Head>
      <div>
        <div>
          <div className="min-h-screen flex flex-col justify-center sm:py-12 bg-gray-100">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
              <h1 className="font-bold text-center text-2xl mb-5">登录</h1>
              <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 shadow-md">
                <div className="px-5 py-7">
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">邮箱</label>
                  <input onChange={e => setEmail(e.target.value)} type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">密码</label>
                  <input onChange={e => setPassword(e.target.value)} type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                  <button onClick={handleSubmit} type="button" className="transition duration-200 bg-[#c00] hover:bg-[#e00] focus:shadow-sm focus:ring-4 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span className="inline-block mr-2">登录</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
                <div className="py-5">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-center sm:text-left whitespace-nowrap">
                      <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <Link href={`/forget-password`} className="inline-block ml-1">忘记密码？</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center sm:text-left whitespace-nowrap">
                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <Link className="inline-block ml-1" href={'/'}>回到首页</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}