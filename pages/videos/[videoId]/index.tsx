/**
 * Play the video
 */

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Image from 'next/image'

import useProfile from '../../../hooks/useProfile'
import Video from '../../../components/Video'

import { parseCookie } from '../../../utils'

import { videosFirst, videosSecond } from '../../../utils'

const videos = videosFirst.concat(videosSecond)

export default function VideoHomepage() {
  const [video, setVideo] = useState({ title: '', desc: '', imgUrl: 'http://static.dancedreamtv.com/static/upload/image/20221023/1666502498622197.jpg', playUrl: 'https://www.bilibili.com/video/BV18S4y1E7Rz/?share_source=copy_web' })
  const router = useRouter()
  const { profile, setUserId } = useProfile({
    redirectTo: '/login',
  })

  // Get video id
  const { videoId = '' } = router.query

  useEffect(() => {
    if (videoId) {
      const video = videos.find(v => v.id === videoId)
      if (video) {
        setVideo(video)
      }
    }
  }, [videoId])

  useEffect(() => {
    // Check user id from cookie
    const cookiesobj = parseCookie(document.cookie)
    if (cookiesobj.userId && cookiesobj.username) {
      setUserId(cookiesobj.userId)
    }
  }, [router.pathname])

  const isLoggedIn = profile && profile.id

  return (
    <>
      <Head>
        <title>播放视频 | 成都舞之乐文化传播有限公司</title>
      </Head>
      <div className='min-h-screen'>
        <div className="container pt-10">
          <h1 className='text-4xl mb-5'>播放视频</h1>
          <div className="video flex items-center justify-center">
            <div className="content">
              <p className='text-2xl'>{video.title}</p>
              <p>{video.desc}</p>
              {
                isLoggedIn && (
                  <div>
                    <p className='py-10'>点击图片中播放按钮来播放视频：</p>
                    <div className='w-[800px]'>
                      <Video
                        poster={video.imgUrl}
                        src={video.playUrl}
                      />
                    </div>
                    <p className='text-slate-500 py-5'>注意：当前视频为预览版，完整版需要付费观看，请在 我的主页 充值再观看。</p>
                  </div>
                )
              }
              {
                !isLoggedIn && (
                  <div>
                    <p className='my-10 text-[#c00]'>提示：该视频需要登录后才能观看，请点击右上角登录按钮进行登录。</p>
                    <div className="img mt-5 cursor-pointer">
                      <Image
                        width={800}
                        height={500}
                        src={video.imgUrl}
                        alt={'poster'}
                      />
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}