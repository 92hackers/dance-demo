/**
 * Top Navbar
 */

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import useSWRMutation from 'swr/mutation'
import { useRouter } from 'next/router'

import useProfile from "../hooks/useProfile"
import { creator } from '../utils/http'

import { parseCookie } from "../utils"

export default function Navbar() {
  const router = useRouter()
  const { trigger, isMutating } = useSWRMutation('/logout', creator)
  const { setProfile, profile, setUserId } = useProfile({
    redirectTo: '/login',
  })

  async function handleLogout() {
    // Trigger logout api
    const result = await trigger({}).catch(e => e)

    if (result.error) {
      return alert(result.error)
    }

    // Clear the profile state
    setProfile(null, false)

    // Redirect to /
    router.push('/')
  }

  useEffect(() => {
    // Check user id from cookie
    const cookiesobj = parseCookie(document.cookie)
    if (cookiesobj.userId && cookiesobj.username) {
      setUserId(cookiesobj.userId)
    }
  }, [router.pathname])

  const isLoggedIn = profile && profile.id

  return (
    <nav className="h-20 leading-[5rem] border-b">
      <div className="container flex justify-between">
        <div className="menus flex">
          <div className="logo">
            <Link href={'/'}>
              <Image
                width={110}
                height={80}
                src="http://static.dancedreamtv.com/static/upload/image/20221018/1666075430902352.jpg"
                alt="logo"
              />
            </Link>
          </div>
          <ul className="nav flex">
            <li className="pl-10 pr-10"><Link className="hover:text-[#c00] hover:underline" href="/videos">比赛视频</Link></li>
            <li className="pl-10 pr-10"><Link className="hover:text-[#c00] hover:underline" href="/about-us">关于我们</Link></li>
            <li className="pl-10 pr-10"><Link className="hover:text-[#c00] hover:underline" href="/contact">联系我们</Link></li>
            <li className="pl-10 pr-10"><Link className="hover:text-[#c00] hover:underline" href="/aggrement">用户协议</Link></li>
          </ul>
        </div>
        {
          !isLoggedIn && (
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
          isLoggedIn && (
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