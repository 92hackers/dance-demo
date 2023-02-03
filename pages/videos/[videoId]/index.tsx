/**
 * Play the video
 */

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Image from 'next/image'

import { videosFirst, videosSecond } from '../../../utils'

const videos = videosFirst.concat(videosSecond)

export default function VideoHomepage() {
  const [video, setVideo] = useState({ title: '', desc: '', imgUrl: '' })
  const router = useRouter()
  const { videoId = '' } = router.query

  useEffect(() => {
    if (videoId) {
      const video = videos.find(v => v.id === videoId)
      if (video) {
        setVideo(video)
      }
    }
  }, [videoId])

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
              <p>名字：{video.title}</p>
              <p>简介：{video.desc}</p>
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
          </div>
        </div>
      </div>
    </>
  )
}