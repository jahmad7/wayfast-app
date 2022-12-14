/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useForm } from "react-hook-form";
import { PlusIcon, ChevronUpIcon } from "@heroicons/react/outline";

// COMPONENTS
import PageContainer from "../components/pageContainer";
import SEOHead from "../components/seo";

export default function Home() {
  const [platformSelected, setPlatformSelected] = useState(null);
  const [hangingSelected, setHangingSelected] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [submitting, setSubmitting] = useState(false);

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

  const features = [
    {
      icon: "/features_tag.svg",
      title: "Attention to Detail",
      body: "On screen options of 'No tag' or 'Broken tag' to record certain plants keeps the harvest moving, in record time!",
    },
    {
      icon: "/features_spanish.svg",
      title: "En Español",
      altTitle: "Available in Spanish",
      body: "Interfaz fácil de usar, soporte en ingles y Español.",
      altBody:
        "Our support and easy-to-use interface comes in both English and Spanish.",
    },
    {
      icon: "/features_data.svg",
      title: "Data Security",
      body: "Redundant backup layers ensure your data is always safe and secure.",
    },
  ];

  const platform = [
    {
      title: "Wet & Dry Harvest Modes",
      options: [
        {
          title: "Standard:",
          copy: "After each successful scan, remove and replace with the next plant. 1,200 plants/hour",
        },
        {
          title: "Incremental:",
          copy: "Add a new plant to the tote after each successful scan, no need to remove the previous plant. 1,800 plants/hour",
        },
        {
          title: "Batch(Beta):",
          copy: "Place a tote with up to 25 plants and average out the weight. 25x faster than standard mode.",
        },
      ],
    },
    {
      title: "Specifications",
      options: [
        {
          title: " Dimensions:",
          copy: "42” (L) x 24” (W) x 60” (H) + expandable (H)”",
        },
        { title: " Resolution:", copy: "5 Grams" },
      ],
    },
  ];
  const hanging = [
    {
      title: "Wet & Dry Harvest Modes",
      options: [
        {
          title: "Standard:",
          copy: "After each successful scan, remove and replace with the next plant. 1,200 plants/hour",
        },
      ],
    },
    {
      title: "Specifications",
      options: [
        {
          title: " Dimensions:",
          copy: "16” (L) x 16” (W) x 60” (H) + expandable (H)”",
        },
        { title: " Resolution:", copy: " 1 Gram" },
      ],
    },
  ];
  return (
    <div>
      <SEOHead
        data={{
          title: "WayFast | Cannabis Cultivation Smart Scales",
          description:
            "WayFast Cannabis Cultivation Smart Scales - Harvest compliance. Simplified.",
        }}
      />
      <PageContainer>
        <div className=" h-100 relative">
          <Image
            src="/head_banner_desk.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          <main className="px-12 pt-12 py-48 lg:py-24 z-10 relative max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 lg:gap-4">
            <div className="text-center lg:col-span-6 lg:text-left lg:flex flex-col lg:items-start">
              <h1 className="tracking-tight text-wayfastGreen  pt-6 font-bold text-4xl md:text-6xl  lg:text-5xl, xl:text-6xl">
                <span className="block pt-2"> CANNABIS</span>
                <span className="block pt-2">CULTIVATION</span>
                <span className="block pt-2">SCALES</span>
              </h1>
              <p className="mt-6 text-3xl font-light tracking-wider">
                Watch It Work In Real Time
              </p>
              <div className="mt-12  items-center justify-center hidden lg:flex">
                <a
                  href="#contact"
                  className="mx-2 flex items-center justify-center px-10 py-3  border-2 border-wayfastGreen rounded-2xl text-base bg-wayfastGreen hover:bg-white  text-white hover:text-black md:py-4 "
                >
                  REQUEST QUOTE
                </a>
              </div>
            </div>
            <div className="hidden md:flex col-span-6  items-center mt-4 lg:mt-0">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=eOtIKVcEmfk"
                muted
                loop
                playing
                width="100%"
                height="83%"
              />
            </div>
            <div className="md:hidden col-span-6 flex items-center justify-center mt-4 lg:mt-0">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=eOtIKVcEmfk"
                muted
                loop
                playing
                width="80%"
                height="100%"
              />
            </div>
            <div className=" lg:hidden">
              <div className="mt-12 flex items-center justify-center">
                <a
                  href="#contact"
                  className="mx-2 flex items-center justify-center px-10 py-3  border-2 border-wayfastGreen rounded-2xl text-base bg-wayfastGreen hover:bg-white  text-white hover:text-black md:py-4 "
                >
                  REQUEST QUOTE
                </a>
              </div>
            </div>
          </main>
        </div>

        <main className="px-12 py-16 sm:py-20 z-10 relative max-w-7xl mx-auto ">
          <h1 className="text-black  text-center tracking-wide font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
            Harvest compliance. Simplified.
          </h1>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 mt-20">
            <div className="col-span-3 mx-40 mt-2">
              <img
                src="/steps_desk.svg"
                alt="Picture of the author"
                objectPosition="center"
                className="h-24 w-full sm:h-24 "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="pt-4 text-center text-black text-3xl font-medium tracking-widest">
                Weigh
              </h3>
              <p className="text-center text-gray-700 w-1/2 mx-auto pt-4">
                Just place the plant.
                <span className="block">
                  We automatically capture your data.
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="pt-4 text-center text-black text-3xl font-medium tracking-widest">
                Repeat
              </h3>
              <p className="text-center text-gray-700 w-1/2 mx-auto pt-4">
                Place a new plant every 3 seconds. Clock in at 1,200+ plants per
                hour.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="pt-4 text-center text-black text-3xl font-medium tracking-widest">
                Export
              </h3>
              <p className="text-center text-gray-700 w-1/2 mx-auto pt-4">
                Upload your harvest file into your preferred software.
              </p>
            </div>
          </div>
          <div className="grid md:hidden grid-cols-3 mt-20 ">
            <div className="">
              <Image
                src="/steps_mob.svg"
                alt="Picture of the author"
                objectPosition="center"
                width={100}
                height={550}
                className=" mt-4 -my-auto "
              />
            </div>
            <div className="col-span-2 flex flex-col gap-32">
              <div className="flex flex-col justify-end">
                <h3 className="text-left  text-black text-2xl font-medium tracking-widest">
                  Weigh
                </h3>
                <p className="text-left text-gray-700 pt-2">
                  Just place the plant.
                  <span className="block">
                    We automatically capture your data.
                  </span>
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="text-left  pt-1 text-black text-2xl font-medium tracking-widest">
                  Repeat
                </h3>
                <p className="text-left text-gray-700 pt-2">
                  Place a new plant every 3 seconds. Clock in at 1,200+ plants
                  per hour.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="pt-1 text-left   text-black text-2xl font-medium tracking-widest">
                  Export
                </h3>
                <p className="text-left text-gray-700 pt-2">
                  Upload your harvest file into your preferred software.
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className=" h-100 relative">
          <Image
            src="/banner_features_desk.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          <main className="px-12 py-16 z-10 relative max-w-7xl mx-auto flex flex-col lg:gap-4">
            <h1 className="text-white  text-center tracking-wide font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
              Features &#38; Benefits
            </h1>
            <div className="col-span-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-x-12 lg:gap-x-24 gap-y-12">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    onMouseOver={() => setHoverIndex(index)}
                    onMouseOut={() => setHoverIndex(null)}
                    className="lg:mt-0  col-span-1 flex flex-col  items-start text-center px-8 bg-white rounded-3xl shadow-xl divide-gray-200"
                  >
                    <div className="flex flex-row gap-2 items-center pt-4 ">
                      <img
                        src={feature.icon}
                        alt="Icons"
                        width={70}
                        height={70}
                      />
                      <h3 className="text-xl lg:text-2xl text-wayfastGreen font-medium text-left">
                        {feature.altTitle && hoverIndex === index
                          ? feature.altTitle
                          : feature.title}
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col pb-4">
                      <p className="text-sm my-4 leading-6 text-gray-700  flex flex-col text-left">
                        <span className="block">
                          {feature.altBody && hoverIndex === index
                            ? feature.altBody
                            : feature.body}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </main>
        </div>
        <main
          id="products"
          className="px-12 py-16 sm:py-20 z-10 relative max-w-7xl mx-auto "
        >
          {/* <h1 className="text-black  text-center tracking-wide font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
            Product Line
          </h1> */}
          <div className="flex flex-col lg:grid grid-cols-2 gap-16 mt-24">
            <img
              src="/platform_scale.jpg"
              alt="Picture of the author"
              objectPosition="center"
              className="w-auto lg:w-3/4 h:auto"
            />
            <div className="flex flex-col ">
              <h1 className="text-wayfastGreen text-center lg:text-left tracking-wide font-semibold text-4xl md:text-5xl lg:font-extrabold lg:text-4xl, xl:text-5xl">
                V5 Platform Scale
              </h1>
              <div className="mt-12 flex gap-4 lg:flex-row  flex-col items-start justify-start">
                <a
                  href="/demo"
                  className="mx-2 flex items-center justify-center px-10 py-3 border-2 border-wayfastGreen rounded-2xl text-base bg-wayfastGreen hover:bg-white  text-white hover:text-black md:py-4 "
                >
                  BOOK DEMO
                </a>
                <a
                  href="/harvest-calculator"
                  className="mx-2 flex items-center justify-center px-10 py-3 border-2 border-wayfastGreen rounded-2xl text-base bg-wayfastGreen hover:bg-white  text-white hover:text-black md:py-4 "
                >
                  SEE SAVINGS
                </a>
              </div>
              <ul className="marker:text-wayfastGreen list-outside  list-disc mt-12 ml-8">
                <li className="py-2 text-lg lg:text-2xl font-semibold">
                  24” x 31.6” Platform OHAUS Scale
                </li>
                <li className="py-2 text-lg lg:text-2xl font-semibold">
                  Legal for Trade, NTEP-certified
                </li>
                <li className="py-2 text-lg lg:text-2xl font-semibold">
                  6” Wheels for Maximum Portability
                </li>
                <li className="py-2 text-lg lg:text-2xl font-semibold">
                  Capacity: 250 lbs
                </li>
                <li className="py-2 pb-3 border-b  border-gray-700 text-lg lg:text-2xl font-semibold">
                  Recommended floor space: 3&apos; x 5&apos;
                </li>
              </ul>
              {platform.map((item, index) => (
                <div
                  key={index}
                  className="ml-8 border-b border-gray-700 py-3 "
                >
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="text-lg lg:text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p></p>
                    {platformSelected === index ? (
                      <button onClick={() => setPlatformSelected(null)}>
                        <ChevronUpIcon
                          className="h-6 w-6 text-wayfastGreen"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <button onClick={() => setPlatformSelected(index)}>
                        <PlusIcon
                          className="h-6 w-6  text-wayfastGreen"
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>
                  {platformSelected === index && (
                    <ul className="marker:text-wayfastGreen list-outside  list-disc mt-2 ml-8">
                      {item.options.map((item, index) => (
                        <li key={index} className="py-2 text-lg font-semibold">
                          {item.title}
                          <p className="text-gray-600 text-sm font-normal">
                            {item.copy}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* <div className=" h-100 relative">
          <Image
            src="/banner_battery_desk.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          <main className="px-12 py-16 sm:py-20 z-10 relative max-w-7xl mx-auto flex flex-col ">
            <div className="sm:text-center lg:col-span-6 lg:text-left lg:flex flex-col lg:items-center justify-center">
              <h1 className=" text-white text-center mb-4 lg:mb-0 pt-6 text-4xl md:text-6xl lg:text-5xl, xl:text-6xl font-semibold">
                Limited Time Offer!
              </h1>
              <p className=" text-white text-center mb-4 lg:mb-0 pt-6 font-extralight  	text-4xl md:text-6xl lg:text-5xl, xl:text-6xl">
                Finalize Your Order Before May 31st
                <span className="block">
                  and get <span className="font-semibold">$1,000 off</span>
                </span>
              </p>
              <p className=" text-white text-center  pt-6 lg:font-extralight  	text-sm">
                Conditions Apply *
              </p>
            </div>
          </main>
        </div> */}
        <main className="px-12 py-16 sm:py-20 z-10 relative max-w-7xl mx-auto ">
          <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-16 ">
            <div className="flex flex-col ">
              <h1 className="text-wayfastGreen text-center lg:text-left tracking-wide font-semibold text-4xl md:text-5xl lg:font-extrabold lg:text-4xl, xl:text-5xl">
                V1 Hanging Scale
              </h1>
              <div className="mt-12 flex gap-4 lg:flex-row  flex-col items-start justify-start">
                <a
                  href="/demo"
                  className="mx-2 flex items-center justify-center px-10 py-3 border-2 border-wayfastGreen rounded-2xl text-base bg-wayfastGreen hover:bg-white  text-white hover:text-black md:py-4 "
                >
                  BOOK DEMO
                </a>
                <a
                  href="/harvest-calculator"
                  className="mx-2 flex items-center justify-center px-10 py-3 border-2 border-wayfastGreen rounded-2xl text-base bg-wayfastGreen hover:bg-white  text-white hover:text-black md:py-4 "
                >
                  SEE SAVINGS
                </a>
              </div>
              <ul className="marker:text-wayfastGreen list-outside  list-disc mt-12 ml-8">
                <li className="py-2 text-lg lg:text-2xl font-semibold">
                  Adjustable Height to fit your needs
                </li>
                <li className="py-2 text-lg lg:text-2xl font-semibold">
                  Legal for Trade, NTEP-certified
                </li>
                <li className="py-2 text-lg lg:text-2xl font-semibold">
                  3” Wheels for Maximum Portability
                </li>
                <li className="py-2 text-lg lg:text-2xl font-semibold">
                  Extra long hook to keep harvest moving
                </li>
                <li className="py-2 text-lg lg:text-2xl font-semibold">
                  Capacity: 30 lbs
                </li>
                <li className="py-2 pb-3 border-b  border-gray-700 text-lg lg:text-2xl font-semibold">
                  Recommended floor space: 2&apos; x 2&apos;
                </li>
              </ul>
              {hanging.map((item, index) => (
                <div
                  key={index}
                  className="ml-8 border-b border-gray-700 py-3 "
                >
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="text-lg lg:text-2xl font-semibold">
                      {item.title}
                    </h3>
                    {hangingSelected === index ? (
                      <button onClick={() => setHangingSelected(null)}>
                        <ChevronUpIcon
                          className="h-6 w-6 text-wayfastGreen"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <button onClick={() => setHangingSelected(index)}>
                        <PlusIcon
                          className="h-6 w-6  text-wayfastGreen"
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>
                  {hangingSelected === index && (
                    <ul className="marker:text-wayfastGreen list-outside  list-disc mt-2 ml-8">
                      {item.options.map((item, index) => (
                        <li key={index} className="py-2 text-lg font-semibold">
                          {item.title}{" "}
                          <p className="text-gray-600 text-sm">{item.copy}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-start justify-end">
              <img
                src="/hanging_scale.jpg"
                alt="Picture of the author"
                objectPosition="center"
                className="w-auto lg:w-3/4 h:auto"
              />
            </div>
          </div>
        </main>

        <main className="px-12 py-8 sm:py-12 z-10 relative max-w-6xl mx-auto border overflow-hidden  rounded-3xl mb-4">
          <div className=" rounded-lg">
            <Image
              src="/banner_testimonial_desk.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="z-0"
            />
          </div>
          <div className="relative z-30 flex flex-col lg:grid grid-cols-3">
            <div className="hidden lg:flex flex-col items-center justify-center">
              <img
                src="./battery_white.svg"
                alt="Icons"
                width={160}
                height={160}
              />
            </div>
            <div className="col-span-2 lg:border-l border-white pl-8">
              <h3 className=" text-white flex flex-row gap-2 text-left mb-4 lg:mb-0 tracking-wide font-semibold text-3xl md:text-6xl  lg:text-5xl, xl:text-6xl">
                <div className="lg:hidden flex flex-col items-center justify-center">
                  <img
                    src="./battery_white.svg"
                    alt="Icons"
                    width={100}
                    height={100}
                  />
                </div>
                Harvest In The Dark
              </h3>
              <p className="text-white text-2xl my-4 font-light leading-7  tracking-wide flex flex-col text-left">
                Upgrade your production with our
                <span className="pt-1 block">
                  <span className="font-bold">42,000 mAh</span> rechargeable
                  Battery
                </span>
              </p>
            </div>
          </div>
        </main>

        <main className="px-12 py-16 sm:py-20 z-10 relative max-w-7xl mx-auto ">
          <h1 className="text-black  text-center tracking-wide font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
            What Our Partners Say
          </h1>
          <div className="fle flex-col lg:grid grid-cols-3 pt-2 ">
            <div>
              <Image
                src="/claybourne.co_black.svg"
                alt="Picture of the author"
                width={250}
                height={250}
                className="z-0 rounded-3xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-start justify-start">
              <Image
                src="/quote_mark.svg"
                alt="Picture of the author"
                width={80}
                height={80}
                className="z-0 rounded-3xl"
              />
              <p className="ml-3 text-xl text-left tracking-wide text-gray-900 z-0 font-extralight">
                This is the only system that makes any sort of sense!
              </p>
              <p className="ml-3  text-2xl font-bold tracking-wide pt-4">
                Brent Barnes
              </p>
              <p id="contact" className="ml-3  block text-xl font-light pt-1">
                COO, Claybourne Co
              </p>
            </div>
          </div>
        </main>

        <form
          onSubmit={handleSubmit(submit)}
          className="px-12 pb-16 sm:pb-20 z-10 relative max-w-4xl mx-auto "
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
    </div>
  );
}
