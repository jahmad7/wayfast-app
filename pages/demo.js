import Head from "next/head";

// COMPONENTS
import PageContainer from "../components/pageContainer";

function Booking() {
  return (
    <div>
      <Head>
        <title>WayFast | Demo</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <PageContainer>
        <div className="container overflow-visible  max-w-7xl mx-auto h-screen">
          <iframe
            title="scheduling WAYFAST appointments"
            src="https://calendly.com/ariawayfast/wayfastdemo"
            width="100%"
            height="100%"
            frameBorder="0"
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

export default Booking;
