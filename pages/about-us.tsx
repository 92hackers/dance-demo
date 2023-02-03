/**
 * About us
 */

import Head from 'next/head'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>关于我们 | 成都舞之乐文化传播有限公司</title>
      </Head>
      <div className="min-h-screen">
        <div className="container">
          <div className="container box-content">
            <div className="comm-n-title text-center py-10">
              <h3 className="name text-4xl">关于我们</h3>
              <p className="subtitle"></p>
            </div>
            <div className="detail text-slate-600">
              <p>公司全称：成都舞之乐文化传播有限公司，成立于2019年，位于四川省成都市，是一家以从事文化艺术业为主的企业。成立以来，始终坚持韧文化、平民化的创作风格和专业化、产业化、多元化的发展宗旨，面向社会、面向市场，求真务实、励精图治。</p>
              <p>
                <br/>
              </p>
              <p>公司拥有一支素质精良的专业化队伍，具有丰富的影视行业经验，拥有一流的策划、管理、经营运作人才和资深制作人 、编剧、导演、演员等丰富的人力资源，曾先后制作发行多部优秀电视剧、电影、网络剧等，同时，还拥有经验丰富的发行人员，有超过2000集小时以上的发行业绩。</p>
              <p><br/></p>
              <p>公司制作队伍稳定精良，遵循专业化和精益求精的准则，创作的每一部剧目都成为具有市场影响力的电视精品，凭借其深度的内容、完善的制作、出色的销售，获得了业界的尊敬和广泛认可。</p>
              <p><br/></p>
              <p className='flex mt-5 content-center justify-center'><img src="http://www.dancedreamtv.com/static/upload/image/20200512/1589265249349458.jpg" /></p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}