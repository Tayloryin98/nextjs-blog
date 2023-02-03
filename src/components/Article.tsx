import dayjs from "dayjs";
import Link from "next/link";
import { FC } from "react";

export interface ArticleIntl{
  _id: string;
  title: string;
  content: string;
  published: number;
};

export interface ArticleProps {
  article: ArticleIntl
  timeShow?: string;
}
const Article: FC<ArticleProps> = ({
  article: { _id, title, content, published },
  timeShow,
}) => {
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl "></div>
        <Link href={_id}>
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{title}</span>
        </Link>
      </h2>
      <time
        className={`relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 ${timeShow}`}
      >
        <span className="absolute inset-y-0 left-0 flex items-center">
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        {dayjs(published).format("MMMM DD, YYYY")}
      </time>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {content}
      </p>
      <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
        Read Article
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="ml-1 h-4 w-4 stroke-current"
        >
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </article>
  );
};
export default Article;
