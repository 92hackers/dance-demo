/**
 * Contact us
 */

import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>联系我们 | 成都舞之乐文化传播有限公司</title>
      </Head>
      <div className="min-h-screen">
        <div className="container">
          <div className="container box-content">
            <div className="comm-n-title text-center py-20">
              <h3 className="name text-4xl">联系我们</h3>
              <p className="subtitle"></p>
            </div>
            <div className="detail text-slate-500">
              <p><span>联系人：杨冬</span>
                <br />
                <span>电　话：028-64100072</span>
                <br />
                <span>邮　箱：18738630279@163.com</span><br />
                <span>地　址：中国（四川）自由贸易试验区成都高新区天府大道中段1388号1栋5层585号</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}