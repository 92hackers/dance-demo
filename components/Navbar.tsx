/**
 * Top Navbar
 */

import Link from "next/link"
import Image from "next/image"

import axios from 'axios'

import { useState, useEffect } from "react"

export default function Navbar() {
  const [profile, setProfile] = useState(null)

  async function handleLogout() {
    console.log('logged out');
    // Trigger logout api

    // redirect to /
  }

  useEffect(() => {
    const { cookie } = document
    const cookiesArr = cookie.split('; ')
    const cookiesObj = cookiesArr.reduce((acc, c) => {
      const [key, value] = c.split('=')
      acc[key] = value
      return acc
    }, {})
    if (cookiesObj.userId && cookiesObj.username) {
      axios
        .get(`/api/profile/${cookiesObj.userId}`)
        .then(res => setProfile(res.data))
        .catch(err => console.log(err))
    }
  }, [])

  return (
    <nav className="h-20 leading-[5rem] border-b">
      <div className="container flex justify-between">
        <div className="menus flex">
          <div className="logo">
            <Link href={'/'}>
              <Image
                width={110}
                height={80}
                src="http://www.dancedreamtv.com/static/upload/image/20221018/1666075430902352.jpg"
                alt="logo"
              />
            </Link>
          </div>
          <ul className="nav flex">
            <li className="pl-10 pr-10"><Link className="hover:text-[#c00] hover:underline" href="/videos">比赛视频</Link></li>
            <li className="pl-10 pr-10"><Link className="hover:text-[#c00] hover:underline" href="/about-us">关门我们</Link></li>
            <li className="pl-10 pr-10"><Link className="hover:text-[#c00] hover:underline" href="/contact">联系我们</Link></li>
          </ul>
        </div>
        {
          !profile && (
            <div className="flex items-center">
              <Link href={`/login`} className="flex">
                <button type="button" className="transition leading-none inline-block px-5 text-white h-10 w-20 cursor-pointer rounded-lg ring-inset bg-[#c00]">
                  <span>登录</span>
                </button>
              </Link>
              <Link href={`/signup`} className="flex ml-2">
                <button type="button" className="transition leading-none inline-block px-5 text-[#c00] h-10 w-20 cursor-pointer rounded-lg ring-inset border">
                  <span>注册</span>
                </button>
              </Link>
            </div>
          )
        }
        {
          profile && (
            <div className="flex items-center">
              <Link href={`/users/${profile.id}`} className="flex">
                <button type="button" className="transition leading-none inline-block px-5 text-white h-10 w-30 cursor-pointer rounded-lg ring-inset bg-[#c00]">
                  <span>我的主页</span>
                </button>
              </Link>
              <div className="flex ml-2">
                <button onClick={handleLogout} type="button" className="transition leading-none inline-block px-5 text-[#c00] h-10 w-30 cursor-pointer rounded-lg ring-inset border">
                  <span>退出登录</span>
                </button>
              </div>
            </div>
          )
        }
      </div>
    </nav>
  )
}