import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import VideoCard from '../components/VideoCard'
import { videosFirst, videosSecond } from '../utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="pb-24">
        <div className='relative h-[870px]'>
          <Image
            src={'http://static.dancedreamtv.com/static/upload/image/20221023/1666501259248764.jpg'}
            alt="dance"
            fill
          />
        </div>
      </div>
      <section className='container'>
        <h1 className='text-4xl mb-3'>比赛视频</h1>
        <p className='mb-10'>全球最好看的影视都在这</p>
        <ul className='flex justify-between mb-10'>
          {
            videosFirst.map((v, idx) => (
              <VideoCard {...v} key={idx} />
            ))
          }
        </ul>
        <ul className='flex justify-between mb-10'>
          {
            videosSecond.map((v, idx) => (
              <VideoCard {...v} key={idx} />
            ))
          }
        </ul>
      </section>
    </>
  )
}
