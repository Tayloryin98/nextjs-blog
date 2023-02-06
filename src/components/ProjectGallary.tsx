import { LinkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { FC, ReactNode } from "react";

export interface ProjectInl {
  _id: string;
  img: ReactNode;
  name: string;
  summary: string;
  url: string;
}

export interface ProjectGallary {
  project: ProjectInl;
}

const ProjectGallary: FC<ProjectGallary> = ({
  project: { _id, img, name, summary, url },
}) => {
  return (
    <div className="group relative flex flex-col items-start">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {img}
      </div>
      <h2 className="font-semibold dark:text-zinc-100 mt-6 text-base text-zinc-800">
        <div className="group-hover:opacity-100 absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={url} target="_blank"> 
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{name}</span>
        </Link>
      </h2>
      <p className="relative text-sm z-10 mt-2 text-zinc-600 dark:text-zinc-400">
        {summary}
      </p>
      <p className="relative z-10 mt-6 flex text-sm font-medium items-center text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <LinkIcon className="h-5 w-5 flex-none"></LinkIcon>
        <span className="ml-2">{name}</span>
      </p>
    </div>
  );
};

export default ProjectGallary;
