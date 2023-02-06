import { Popover, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Avatar from "public/avatar.jpg";
import { FC, Fragment } from "react";
import { ChevronDownIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface HeaderProps {}

const HeaderItemList = [
  { name: "About", value: "about" },
  { name: "Articles", value: "articles" },
  { name: "Projects", value: "projects" },
  { name: "Uses", value: "uses" },
];

const Header: FC<HeaderProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="pointer-events-none  sticky top-0 z-50 flex flex-col">
      <div className="w-full sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative bg-white px-4 dark:bg-zinc-900 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="relative flex gap-4 py-4">
                <div className="flex flex-1">
                  <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                    <Link href="/about" className="pointer-events-auto">
                      <Image
                        className="h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                        style={{ color: "transparent" }}
                        src={Avatar}
                        alt="avator"
                      ></Image>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-1 justify-end md:justify-center">
                  <Popover className="pointer-events-auto relative md:hidden">
                    <Popover.Button className="group flex h-full items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                      Menu
                      <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
                    </Popover.Button>
                    <Popover.Overlay className=" fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80"></Popover.Overlay>
                    <Transition
                      as={Fragment}
                      enter="transition ease-in duration-100"
                      enterFrom="opacity-0 scale-90"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-90"
                    >
                      <Popover.Panel className="fixed inset-x-4 top-8 z-50 origin-top  rounded-3xl bg-white p-8  ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
                        {({ close }) => (
                          <>
                            <div className="flex flex-row-reverse items-center justify-between">
                              <button
                                onClick={() => {
                                  close();
                                }}
                                aria-label="Close menu"
                                className="-m-1 p-1"
                                type="button"
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                                >
                                  <path
                                    d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </button>
                              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                Navigation
                              </h2>
                            </div>
                            <nav className="mt-6">
                              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                {HeaderItemList.map((item) => {
                                  return (
                                    <li key={`head-${item.value}`}>
                                      <a
                                        className="block py-2"
                                        data-headlessui-state="open"
                                        href={`/${item.value}`}
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </nav>
                          </>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                  <nav className="pointer-events-auto hidden md:block">
                    <ul className="shadoe-zinc-800/5 flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                      {HeaderItemList.map((item) => {
                        return (
                          <li key={item.value}>
                            <Link
                              className="transtion relative block px-3 py-2 hover:text-teal-500 dark:hover:text-teal-400"
                              href={`/${item.value}`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
                <div className="flex justify-end md:flex-1">
                  <div className="pointer-events-auto">
                    <button
                      type="button"
                      onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                      }}
                      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                    >
                      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"></SunIcon>
                      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"></MoonIcon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
