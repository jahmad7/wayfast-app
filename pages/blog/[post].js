import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Butter from "buttercms";
import Head from "next/head";

// COMPONENTS
import PageContainer from "../../components/pageContainer";

const Post = () => {
  const butter = Butter("f1c6a38312c618e1f8299a0d0973d5589ba0efdf");
  const [loaded, setLoaded] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const router = useRouter();
  const { post } = router.query;

  const fetchPosts = async () => {
    butter.post.retrieve(post).then((resp) => {
      setResponseData(resp.data.data);
      setLoaded(true);
    });
  };

  useEffect(() => {
    if (post) fetchPosts();
  }, [post]);

  console.log(responseData);
  return (
    <div>
      <Head>
        <title>WayFast | {responseData?.seo_title}</title>
        <meta name="description" content={responseData?.summary} />
        <link rel="icon" href="/Bottles_Blue.svg" />
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
        <meta property="og:url" content={responseData?.url} />
        <meta property="og:title" content={responseData?.title} />
        <meta property="og:image" content={responseData?.featured_image} />
        <meta
          property="og:description"
          content={responseData?.meta_description}
        />

        <meta
          property="twitter:card"
          content={responseData?.featured_image_alt}
        />
        <meta property="twitter:domain" content="gowayfast.com" />
        <meta property="twitter:url" content="gowayfast.com" />
        <meta name="twitter:title" content={responseData?.seo_title} />
        <meta name="twitter:description" content={responseData?.summary} />
        <meta name="twitter:image" content={responseData?.featured_image} />
      </Head>
      <PageContainer>
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="mt-6 w-4/5 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-atgBlue sm:text-4xl mb-12 ">
                  {responseData?.title}
                </span>
              </h1>
            </div>
            <div
              className="Blog"
              dangerouslySetInnerHTML={{ __html: responseData?.body }}
            />
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Post;
