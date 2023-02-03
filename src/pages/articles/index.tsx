import Article, { ArticleIntl, ArticleProps } from "@/components/Article";
import BaseContainer from "@/layouts/BaseContainer";
import BaseLayout from "@/layouts/BaseLayout";
import dayjs from "dayjs";
import { NextPageWithLayout } from "../_app";

const articleList: Array<ArticleIntl> = [
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

const ArticlePage: NextPageWithLayout = () => {
  return (
    <BaseContainer>
      <header className="max-w-2xl">
        <h1 className="tracking-light text-4xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Writing on software design, company building, and the aerospace
          industry.
        </h1>
        <p className="tex-zinc-600 dark-zinc-400 mt-6 text-base">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articleList.map((item) => {
              return (
                <article
                  key={item._id}
                  className="md:grid md:grid-cols-4 md:items-baseline"
                >
                  <div className="group relative flex flex-col items-start md:col-span-3">
                    <Article
                      article={item}
                      timeShow={"block md:hidden"}
                    ></Article>
                  </div>
                  <time className="text-sm relative z-10 order-first mt-1 mb-3 hidden items-center text-zinc-400 dark:text-zinc-500 md:block">
                    {dayjs(item.published as number).format("MMMM DD, YYYY")}
                  </time>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </BaseContainer>
  );
};

ArticlePage.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default ArticlePage;
