/**
 * Forget password
 */

import { useState, useEffect } from 'react'
import useSWRMutation from 'swr/mutation'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Link from 'next/link'

import { creator } from '../utils/http'

export default function Fn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { trigger, isMutating } = useSWRMutation('/reset-password', creator)
  const router = useRouter()

  async function handleSubmit() {
    if (!email) {
      return alert('请输入邮箱')
    }
    if (!password) {
      return alert('请输入新密码')
    }

    const result = await trigger({ email, password }).catch(e => e)

    if (result.error) {
      return alert(result.error)
    }

    // Redirect to login page
    router.push(`/login`)
  }

  return (
    <>
      <Head>
        <title>重置密码 | 成都舞之乐文化传播有限公司</title>
      </Head>
      <div className="min-h-screen">
        <div className="">
          <div className="min-h-screen flex flex-col justify-center sm:py-12 bg-gray-100">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
              <h1 className="font-bold text-center text-2xl mb-5">重置密码</h1>
              <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 shadow-md">
                <div className="px-5 py-7">
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">邮箱</label>
                  <input onChange={e => setEmail(e.target.value)} type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">新密码</label>
                  <input onChange={e => setPassword(e.target.value)} type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                  <button onClick={handleSubmit} type="button" className="transition duration-200 bg-[#c00] hover:bg-[#e00] focus:shadow-sm focus:ring-4 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span className="inline-block mr-2">重置密码</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}