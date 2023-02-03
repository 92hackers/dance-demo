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
              <p><span>联系人：周经理</span>
                <br />
                <span>手　机：13888888888</span>
                <br />
                <span>电　话：400-1234-5678</span>
                <br />
                <span>传　真：0527-88888888</span>
                <br />
                <span>Ｑ　Ｑ：1000000</span><br />
                <span>微　信：Wx88888888</span><br />
                <span>邮　箱：admin@admin.cn</span><br />
                <span>地　址：这里是您的公司地址人民路123号</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}