/**
 * Footer
 */

import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer className="footer bg-[#c00] pt-16 pb-16">
        <div className="container">
          <div className="menus flex">
            <div className="logo">
              <Link href={'/'} className="text-white">首页</Link>
            </div>
            <ul className="nav flex pl-10">
              <li className="pl-10 pr-10"><Link className="text-white hover:underline" href="/videos">比赛视频</Link></li>
              <li className="pl-10 pr-10"><Link className="text-white hover:underline" href="/about-us">关于我们</Link></li>
              <li className="pl-10 pr-10"><Link className="text-white hover:underline" href="/contact">联系我们</Link></li>
            </ul>
          </div>
          <div className="flex text-white mt-5">
            <p>Copyright © 2023 成都舞之乐文化传播有限公司</p>
            <Link className="ml-10 hover:underline" href={'https://beian.miit.gov.cn/'} target="_blank">蜀ICP备20015223号-1</Link>
          </div>
        </div>
      </footer>
    </>
  )
}