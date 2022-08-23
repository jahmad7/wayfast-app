/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { DesktopComputerIcon } from "@heroicons/react/outline";
import Link from "next/link";

// COMPONENTS
import PageContainer from "../components/pageContainer";

function NotFound() {
  return (
    <div>
      <Head>
        <title>WAYFAST | 404</title>
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

      <PageContainer>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-24 px-12">
          <div className="col-span-2 pr-0 lg:pr-24">
            <h1 className="tracking-tight text-atgBlue  pt-6 font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
              Hmm.
            </h1>
            <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 text-left mb-6 py-2">
              404 - Page Not Found
            </h2>
            <p className="text-atgBlue text-xl w-4/5 md:mx-0 mx-auto py-6 text-center lg:text-left">
              It seems like the page you are looking for can&apos;t be found.
              Let us help guide you out and Get you back on the home.
            </p>
            <a
              href="/"
              className="w-4/5 mx-2 lg:w-1/3 flex items-center justify-center px-10 py-3  border-2 border-wayfastGreen rounded-2xl text-base bg-wayfastGreen hover:bg-white  text-white hover:text-black md:py-4 "
            >
              HOME PAGE
            </a>
          </div>
          <DesktopComputerIcon
            className="h-40 w-40 my-auto text-wayfastGreen"
            aria-hidden="true"
          />
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

export default NotFound;
