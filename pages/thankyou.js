import React, { useState } from "react";
import Head from "next/head";

// COMPONENTS
import PageContainer from "../components//pageContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WayFast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <div className=" max-w-7xl mx-auto my-16 flex flex-col items-center">
          <h1 className="text-6xl text-gray-900 font-black tracking-wide text-center">
            Thank You!
          </h1>
          <h2 className="text-3xl text-gray-900 font-bold tracking-wide text-center py-2">
            We Received Your Request
          </h2>
          <p className="text-lg text-gray-500 tracking-wide text-center pt-8 ">
            You will receive the email from our sales representative within the
            next 48 hours.
          </p>
          <div className="text-yellow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-44 w-44"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
