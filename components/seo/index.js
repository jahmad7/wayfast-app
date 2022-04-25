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
      <script
        dangerouslySetInnerHTML={{
          __html: `window.pipedriveLeadboosterConfig = {base: 'leadbooster-chat.pipedrive.com',companyId: 1043272,playbookUuid: 'a6b15bd7-bb54-465c-bbba-8ddcd7a18270',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})()`,
        }}
      />
      <script
        src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
        async
      ></script>
    </Head>
  );
}
export default SEO;
