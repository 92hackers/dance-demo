/**
 * Top Navbar
 */

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
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
        <div className="flex items-center">
          <Link href={`/login`} className="flex">
            <button type="button" className="transition leading-none inline-block px-5 text-white h-10 w-20 cursor-pointer rounded-lg ring-inset bg-[#c00]">
              <span>登录</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}