import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Butter from "buttercms";

// COMPONENTS
import PageContainer from "../../components/pageContainer";

function Blog() {
  const butter = Butter("f1c6a38312c618e1f8299a0d0973d5589ba0efdf");
  const [loaded, setLoaded] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const fetchPosts = async () => {
    let allPosts = [];
    let noMorePosts = false;
    let currentPage = 1;
    let index = 0;
    while (!noMorePosts) {
      try {
        await butter.post
          .list({ page: currentPage, page_size: 10 })
          .then((resp) => {
            const posts = resp.data.data.map((post, _) => {
              index++;
              const { seo_title, summary, featured_image, categories } = post;
              let isWayfast = categories.some(
                (entry) => entry.name === "WayFast"
              );
              if (isWayfast)
                return (
                  <Link
                    key={index}
                    href="/blog/[post]"
                    as={`/blog/${post.slug}`}
                  >
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="flex-shrink-0">
                        <img
                          className="h-80 w-full object-fit"
                          src={featured_image}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <a href="#" className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900">
                              {seo_title}
                            </p>
                            <p className="mt-3 text-base text-gray-500">
                              {summary}
                            </p>
                          </a>
                        </div>
                        <div className="mt-6 text-right">
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-700">
                              <span aria-hidden="true">&middot;</span>
                              <span>5 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
            });
            Array.prototype.push.apply(allPosts, posts);
            currentPage++;
          });
      } catch {
        noMorePosts = true;
      }
    }
    setResponseData(allPosts);
    setLoaded(true);
  };

  useEffect(() => {
    fetchPosts();
  }, [loaded]);

  return (
    <div>
      <Head>
        <title>WayFast | Blog</title>
        <link rel="icon" href="/Bottles_Blue.svg" />

        <meta
          property="og:description"
          content="WayFast news, industry updates, equipment insights."
        />
        <meta
          name="description"
          content="WayFast news, industry updates, equipment insights."
        />
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
      </Head>

      <PageContainer>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="tracking-tight font-extrabold text-gray-900 text-5xl">
                From the blog
              </h2>
              {/* <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
              </p> */}
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
              {responseData}
            </div>
          </div>
        </div>
      </PageContainer>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/9475514.js"
      />
    </div>
  );
}

export default Blog;
