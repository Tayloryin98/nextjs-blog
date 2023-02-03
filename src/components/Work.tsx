import dayjs from "dayjs";
import Image from "next/image";
import { FC } from "react";

export interface WorkProps {
  _id: string;
  name: string;
  role: string;
  started: number;
  img: string;
  end?: number;
}

const Work: FC<WorkProps> = ({ _id, name, role, img, started, end }) => {
  return (
    <>
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={img}
          className="h-7 w-7"
          alt={name}
          width={24}
          height={24}
          style={{ color: "transparent" }}
        ></Image>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {name}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="dark:text-zin-500 itemd-center ml-auto flex space-x-2 text-xs text-zinc-400">
          <time dateTime={`${dayjs(started).format("YYYY")}`}>
            {dayjs(started).format("YYYY")}
          </time>
          <span>-</span>
          <time dateTime={`${end ? dayjs(end).format("YYYY") : "Present"}`}>
            {end ? dayjs(end).format("YYYY") : "Present"}
          </time>
        </dd>
      </dl>
    </>
  );
};
export default Work;
