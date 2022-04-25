/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Head from "next/head";

function SEO({ data }) {
  return (
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <link rel="icon" href="/Bottles_Blue.svg" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />

      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />

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
  );
}
export default SEO;
