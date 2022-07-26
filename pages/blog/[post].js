import React from "react";
import Butter from "buttercms";
import Head from "next/head";

// COMPONENTS
import PageContainer from "../../components/pageContainer";

const butter = Butter("f1c6a38312c618e1f8299a0d0973d5589ba0efdf");
export default class Post extends React.Component {
  static async getInitialProps({ query }) {
    const resp = await butter.post.retrieve(query.post);
    return resp.data;
  }
  render() {
    const post = this.props.data;

    return (
      <div>
        <Head>
          <title>WayFast | {post?.seo_title}</title>
          <meta name="description" content={post?.summary} />
          <link rel="icon" href="/logo.ico" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}');
          `,
            }}
          />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={post?.url} />
          <meta property="og:title" content={post?.title} />
          <meta property="og:image" content={post?.featured_image} />
          <meta property="og:description" content={post?.meta_description} />

          <meta property="twitter:card" content={post?.featured_image_alt} />
          <meta property="twitter:domain" content="gowayfast.com" />
          <meta property="twitter:url" content="gowayfast.com" />
          <meta name="twitter:title" content={post?.seo_title} />
          <meta name="twitter:description" content={post?.summary} />
          <meta name="twitter:image" content={post?.featured_image} />
        </Head>
        <PageContainer>
          <div className="relative py-16 bg-white overflow-hidden">
            <div className="mt-6 w-4/5 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <div className="text-lg max-w-prose mx-auto">
                <h1>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-atgBlue sm:text-4xl mb-12 ">
                    {post?.title}
                  </span>
                </h1>
              </div>
              <div
                className="Blog"
                dangerouslySetInnerHTML={{ __html: post?.body }}
              />
            </div>
          </div>
        </PageContainer>
      </div>
    );
  }
}
