/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
// COMPONENTS
import PageContainer from "../components/pageContainer";

function Calculator() {
  const [submitting, setSubmitting] = useState(false);
  const [plants, setPlants] = useState(1000);
  const [harvest, setHarvest] = useState(4);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  async function submit(data) {
    if (
      !data.text &&
      data.product &&
      data.product?.some((entry) => entry === "other")
    )
      return null;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        window.location = "/thankyou";
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Head>
        <title>ATG | Harvest Calculator</title>
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
      </Head>

      <PageContainer>
        <div className="px-8 lg:px-12 py-16  z-10 relative max-w-5xl mx-auto  ">
          <h1 className="text-black  text-center tracking-wide font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
            Save with Wayfast.
          </h1>
          <p className="text-center mt-2 text-gray-600">
            Here&apos;s how much monthly savings you can expect with Wayfast
            scales.
          </p>

          <div className="lg:grid flex flex-col grid-cols-3  my-4 lg:mt-16  gap-y-8 lg:gap-x-12 lg:gap-y-2 ">
            <div />
            <div className="hidden lg:block col-span-2">
              <h3 className="text-center text-2xl font-bold flex flex-row  gap-2">
                <span className="text-wayfastGreen font-extrabold">
                  $
                  {(
                    ((harvest * plants * 60) / 3600) * 70 -
                    ((harvest * plants * 3) / 3600) * 70
                  )
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                </span>{" "}
                Monthly Savings{" "}
                <div className="relative z-40 flex flex-col justify-center items-center group">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute top-10 w-48 z-50 flex flex-col items-center hidden  mb-6 group-hover:flex">
                    <div className="w-3 h-3 -mt-3 transform rotate-45 bg-gray-600" />
                    <span className="relative lowercase -mt-2  p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
                      Based on $35/hr rate
                    </span>
                  </div>
                </div>
              </h3>
              <p className="text-right text-gray-900 text-sm">monthly costs</p>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <label
                  htmlFor="default-range"
                  className="block mb-2  font-medium text-gray-900"
                >
                  # of plants per harvest [avg]
                </label>
                <input
                  type="number"
                  min={100}
                  max={5000}
                  defaultValue={1000}
                  step={50}
                  onChange={(e) => {
                    let value = parseInt(e.target.value);
                    if (value < 1) {
                      e.target.value = 1;
                      value = 1;
                    }
                    setPlants(value);
                  }}
                  className="shadow-sm p-2 block w-full sm:text-sm border border-wayfastGreen focus:outline-none focus:border-atgBlue rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="default-range"
                  className="block mb-2  font-medium text-gray-900"
                >
                  # of harvests per month
                </label>
                <input
                  type="number"
                  step={1}
                  autoComplete="organization"
                  onChange={(e) => {
                    let value = parseInt(e.target.value);
                    if (value < 1) {
                      e.target.value = 1;
                      value = 1;
                    } else if (value > 30) {
                      e.target.value = 30;
                      value = 30;
                    }
                    setHarvest(value);
                  }}
                  className="shadow-sm p-2 block w-full sm:text-sm border border-wayfastGreen focus:outline-none focus:border-atgBlue rounded-xl"
                  defaultValue={4}
                />
              </div>
            </div>
            <div className="block lg:hidden col-span-2">
              <h3 className="text-center text-2xl font-bold flex flex-row  gap-2">
                <span className="text-wayfastGreen font-extrabold">
                  $
                  {(
                    ((harvest * plants * 60) / 3600) * 70 -
                    ((harvest * plants * 3) / 3600) * 70
                  )
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                </span>{" "}
                Monthly Savings{" "}
                <div className="relative z-40 flex flex-col justify-center items-center group">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute top-10 -right-8 w-48 z-50 flex flex-col items-center hidden  mb-6 group-hover:flex">
                    <div className="w-3 h-3 -mt-3  ml-24 transform rotate-45 bg-gray-600" />
                    <span className="relative lowercase -mt-2  p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
                      Based on $35/hr rate
                    </span>
                  </div>
                </div>
              </h3>
            </div>
            <div className="col-span-2 grid grid-cols-5  lg:pl-4  gap-x-4 lg:gap-x-12 lg:border-l border-gray-100 w-full">
              <div className="flex flex-col justify-center font-semibold ">
                <p>Manual</p>
              </div>
              <div className="flex flex-col justify-center items-center font-medium col-span-2">
                <p className="text-red-700">60 seconds/plant</p>
              </div>
              <div className="flex flex-col justify-center font-semibold text-red-700 items-end col-span-2">
                <p>
                  $
                  {(((harvest * plants * 60) / 3600) * 70)
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
              <div className="flex flex-col justify-center font-semibold ">
                <p>Wayfast</p>
              </div>
              <div className="flex flex-col justify-center items-center text-wayfastGreen font-medium col-span-2">
                <p>3 seconds/plant</p>
              </div>
              <div className="flex flex-row items-center justify-end col-span-2">
                <p className="font-semibold text-wayfastGreen">
                  $
                  {(((harvest * plants * 3) / 3600) * 70)
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-center pt-4 pb-4 border-b border-gray-200">
            <a
              href="/demo"
              className="flex items-center justify-center px-10 py-3 border-2 border-wayfastGreen rounded-2xl text-base bg-wayfastGreen hover:bg-white  text-white hover:text-black md:py-4 "
            >
              BOOK DEMO
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(submit)}
          className="px-8 lg:px-12  pb-16 sm:pb-20 z-10 relative max-w-4xl mx-auto "
        >
          <h1 className="tracking-tight text-black  text-center  font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
            Ready to WayFast?
          </h1>
          <div>
            <h3 className="font-bold text-2xl tracking-tight my-8">
              1. Contact Information
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-2">
              <div className="relative">
                <input
                  type="text"
                  autoComplete="given-name"
                  className={`shadow-sm p-2 block w-full sm:text-sm border ${
                    errors.name ? "border-red-600" : "border-wayfastGreen"
                  } focus:outline-none focus:border-atgBlue rounded-xl`}
                  placeholder="FULL NAME"
                  {...register("name", { required: true })}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className={`${
                      errors.name ? "visible" : "hidden"
                    } h-5 w-5 text-red-600`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  autoComplete="tel"
                  className={`shadow-sm p-2 block w-full sm:text-sm border ${
                    errors.phone ? "border-red-600" : "border-wayfastGreen"
                  } focus:outline-none focus:border-atgBlue rounded-xl`}
                  placeholder="PHONE NUMBER"
                  {...register("phone", { required: true })}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className={`${
                      errors.phone ? "visible" : "hidden"
                    } h-5 w-5 text-red-600`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  autoComplete="email"
                  className={`shadow-sm p-2 block w-full sm:text-sm border ${
                    errors.email ? "border-red-600" : "border-wayfastGreen"
                  } focus:outline-none focus:border-atgBlue rounded-xl`}
                  placeholder="EMAIL ADDRESS"
                  {...register("email", { required: true })}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className={`${
                      errors.email ? "visible" : "hidden"
                    } h-5 w-5 text-red-600`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  autoComplete="organization"
                  className={`shadow-sm p-2 block w-full sm:text-sm border ${
                    errors.company ? "border-red-600" : "border-wayfastGreen"
                  } focus:outline-none focus:border-atgBlue rounded-xl`}
                  placeholder="COMPANY NAME"
                  {...register("company", { required: true })}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className={`${
                      errors.company ? "visible" : "hidden"
                    } h-5 w-5 text-red-600`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-2xl tracking-tight my-8">
              2. What are you looking for?
            </h3>
            {errors.product && (
              <p className=" text-lg tracking-wide  pt-2 lg:pt-1` text-red-600">
                A product Selection is Required!
              </p>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-2">
              <div className="flex flex-row items-center mt-3">
                <input
                  type="checkbox"
                  value="hanging"
                  {...register("product", { required: true })}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <div className="ml-3 text-base">
                  <label className="font-medium text-gray-500 flex flex-row items-center justify-center gap-2">
                    Hanging Scale
                  </label>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <input
                  type="checkbox"
                  value="platform"
                  {...register("product", { required: true })}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <div className="ml-3 text-base">
                  <label className="font-medium text-gray-500 flex flex-row items-center justify-center gap-2">
                    Platform Scale
                  </label>
                </div>
              </div>
              <div className="flex items-center mt-3 col-span-3">
                <input
                  type="checkbox"
                  value="other"
                  {...register("product", { required: true })}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <div className="ml-3 text-base">
                  <label className="font-medium text-gray-500 flex flex-row items-center justify-center gap-2">
                    Other
                  </label>
                </div>
                <input
                  type="text"
                  {...register("text", {
                    required:
                      getValues("product") &&
                      getValues("product")?.some((entry) => entry === "other"),
                  })}
                  className={`shadow-sm p-2 block ml-4 w-full sm:text-sm border ${
                    !getValues("text") &&
                    getValues("product") &&
                    getValues("product")?.some((entry) => entry === "other")
                      ? "border-red-600"
                      : "border-wayfastGreen"
                  } focus:outline-none focus:border-atgBlue rounded-xl`}
                  placeholder="Type..."
                />
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="mx-2 flex items-center justify-center px-10 py-3 border-2 border-wayfastGreen rounded-2xl text-base bg-wayfastGreen hover:bg-white  text-white hover:text-black md:py-4 "
            >
              {submitting && (
                <svg
                  className="animate-spin h-5 w-5 text-white self-center mr-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  enableBackground="new 0 0 40 40"
                  xml="preserve"
                >
                  <path
                    opacity="0.2"
                    d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                  />
                  <path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z" />
                </svg>
              )}{" "}
              SEND REQUEST
            </button>
          </div>
        </form>
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

export default Calculator;
