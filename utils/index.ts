/**
 * Utils
 */

export const videosFirst = [
  {
    id: '1',
    desc: '国标舞比赛',
    title: '黑池舞蹈节',
    imgUrl: 'http://static.dancedreamtv.com/static/upload/image/20221023/1666501404621819.jpg',
    playUrl: '/heichi.mp4'
  },
  {
    id: '2',
    desc: 'UK公开赛',
    title: 'UK公开赛',
    imgUrl: 'http://static.dancedreamtv.com/static/upload/image/20221023/1666502362748207.jpg',
    playUrl: '/heichi.mp4'
  },
  {
    id: '3',
    desc: '英国Internaltional锦标赛',
    title: '英国Internaltional锦标赛',
    imgUrl: 'http://static.dancedreamtv.com/static/upload/image/20221023/1666502336834015.jpg',
    playUrl: '/heichi.mp4'
  },
]

export const videosSecond = [
  {
    id: '4',
    desc: '职业摩登',
    title: '职业摩登',
    imgUrl: 'http://static.dancedreamtv.com/static/upload/image/20221023/1666502336834015.jpg',
    playUrl: '/heichi.mp4'
  },
  {
    id: '5',
    desc: '职业拉丁',
    title: '职业拉丁',
    imgUrl: 'http://static.dancedreamtv.com/static/upload/image/20221023/1666502647291213.jpg',
    playUrl: '/heichi.mp4'
  },
  {
    id: '6',
    desc: '业余摩登&业余拉丁',
    title: '业余摩登&业余拉丁',
    imgUrl: 'http://static.dancedreamtv.com/static/upload/image/20221023/1666502742657103.jpg',
    playUrl: '/heichi.mp4'
  },
]

export function parseCookie(cookie: string): any {
  const cookiesarr = cookie.split('; ')
  const cookiesobj = cookiesarr.reduce((acc, c) => {
    const [key, value] = c.split('=')
    acc[key] = value
    return acc
  }, {})
  return cookiesobj
}

export enum LoginStatus {
  ACTIVE = 'ACTIVE',
  LOGOUT = 'LOGOUT'
}