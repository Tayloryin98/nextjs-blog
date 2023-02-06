import Header from "@/components/Header";
import Link from "next/link";
import { FC, ReactNode,  } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

const footerItemlist: Array<{ name: string; value: string }> = [
  { name: "About", value: "about" },
  { name: "Projects", value: "projects" },
  { name: "Uses", value: "uses" },
];


const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="relative">
        <Header></Header>
        <main>{children}</main>
        <footer className="mt-32">
          <div className="sm:px-8">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {footerItemlist.map((item) => {
                        return (
                          <Link
                            className="transition hover:text-teal-500 dark:hover:text-teal-400"
                            key={item.value}
                            href={`/${item.value}`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                      © {new Date().getFullYear()} Taylor yin, All rights
                      reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BaseLayout;
