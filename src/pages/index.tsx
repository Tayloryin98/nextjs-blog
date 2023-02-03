import BaseLayout from "@/layouts/BaseLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Gmail from "public/connect/Gmail.svg";
import QQ from "public/connect/qq.svg";
import WeiXin from "public/connect/weixin.svg";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import Article, { ArticleProps } from "@/components/Article";
import Work, { WorkProps } from "@/components/Work";
import PhotoGallary, { PhotoGallaryProps } from "@/components/PhotoGallary";
import p1 from 'public/photoGallary/image-1.webp'
import p2 from 'public/photoGallary/image-2.webp'
import p3 from 'public/photoGallary/image-3.webp'
import p4 from 'public/photoGallary/image-4.webp'
import p5 from 'public/photoGallary/image-5.webp'

const Home: NextPageWithLayout = () => {
  //订阅邮箱提交
  const handalEmailSubscrible = () => {
    //提交
  };
  //文章通过请求获得
  const articleList: Array<ArticleProps> = [
    {
      _id: "1",
      content:
        "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
      title: "Crafting a design system for a multiplanetary future",
      published: dayjs().valueOf(),
    },
    {
      _id: "2",
      content:
        "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
      title: "Introducing Animaginary: High performance web animations",
      published: dayjs().valueOf(),
    },
    {
      _id: "3",
      content:
        "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
      title: "Rewriting the cosmOS kernel in Rust",
      published: dayjs().valueOf(),
    },
  ];
  //Work
  const workList: Array<WorkProps> = [
    {
      _id: "1",
      name: "Planetaria",
      role: "CEO",
      started: 1546272000000,
      img: "https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg",
    },
    {
      _id: "2",
      name: "Airbnb",
      role: "Product Designer",
      started: 1388505600000,
      img: "https://spotlight.tailwindui.com/_next/static/media/airbnb.b4000690.svg",
      end: 1546272000000,
    },
    {
      _id: "3",
      name: "Facebook",
      role: "iOS Software Engineer",
      started: 1293811200000,
      img: "https://spotlight.tailwindui.com/_next/static/media/facebook.dd9e7d48.svg",
      end: 1388505600000,
    },
    {
      _id: "4",
      name: "Starbucks",
      role: "Shift Supervisor",
      started: 1199116800000,
      img: "https://spotlight.tailwindui.com/_next/static/media/starbucks.4a5bd050.svg",
      end: 1293811200000,
    },
  ];

  //图片展览
  const photoList: Array<PhotoGallaryProps> = [
    {
      _id: "1",
      img: p1,
    },
    {
      _id: "2",
      img: p2,
    },
    {
      _id: "3",
      img: p3,
    },
    {
      _id: "4",
      img: p4,
    },
    {
      _id: "5",
      img: p5,
    },
  ];

  return (
    <>
      <div className="mt-16 sm:mt-32 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Software designer, founder, and amateur astronaut.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                I’m Spencer, a software designer and entrepreneur based in New
                York City. I’m the founder and CEO of Planetaria, where we
                develop technologies that empower regular people to explore
                space on their own terms.
              </p>
              <div className="mt-6 flex gap-6">
                <Link href="/" className="-p-1 group -m-1">
                  <WeiXin
                    className="trainsition h-6 w-6 fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    alt="WeiXin"
                  ></WeiXin>
                </Link>
                <Link href="/" className="-p-1 group -m-1">
                  <QQ
                    className="trainsition h-6 w-6 fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    alt="QQ"
                  ></QQ>
                </Link>
                <Link href="/" className="-p-1 group -m-1">
                  <Gmail
                    className="trainsition h-6 w-6 fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    alt="Gmail"
                  ></Gmail>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {photoList.map((item) => {
            return (
              <PhotoGallary {...item} key={`photo-${item._id}`}></PhotoGallary>
            );
          })}
        </div>
      </div>
      <div className="mt-24 sm:px-8 md:mt-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  {articleList.map((item) => {
                    return <Article key={item._id} {...item}></Article>;
                  })}
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <form
                    className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                    action="/thank-you"
                    onSubmit={() => {
                      handalEmailSubscrible();
                    }}
                  >
                    <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 flex-none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <span className="ml-3">Stay up to date</span>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Get notified when I publish something new. and unsubscribe
                      at any time.
                    </p>
                    <div className="mt-6 flex">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="dark:text-zinc-00 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                      ></input>
                      <button
                        className="ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
                        type="submit"
                      >
                        Join
                      </button>
                    </div>
                  </form>
                  <div className="rounded-2xl border border-zinc-100 p-6  dark:border-zinc-700/40  ">
                    <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 flex-none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>
                      <span className="ml-3">Work</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      {workList.map((item) => {
                        return (
                          <li key={item._id} className="flex gap-4">
                            <Work {...item}></Work>
                          </li>
                        );
                      })}
                    </ol>
                    <a
                      className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
                      href="#"
                    >
                      Download CV
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Home;
