/**
 * Videos
 */

import Head from 'next/head'

import VideoCard from '../../components/VideoCard'
import { videosFirst, videosSecond } from '../../utils'

export default function videos() {
  return (
    <>
      <Head>
        <title>比赛视频 | 成都舞之乐文化传播有限公司</title>
      </Head>
      <section className='container pt-24'>
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