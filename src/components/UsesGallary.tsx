import { FC } from "react";

export interface UsesIntl {
  _id: string;
  category: string;
  list: {
    name: string;
    summary: string;
  }[];
}

interface UsesGallaryProps {
  uses: UsesIntl;
}

const UsesGallary: FC<UsesGallaryProps> = ({
  uses: { _id, category, list },
}) => {
  return (
    <section className="md:border-zinc-1 md:border-l md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 className="dark:text-zinc-100 text-sm font-semibold text-zinc-800">
          {category}
        </h2>
        <div className="md:col-span-3">
            <ul role="list" className="space-y-16">
                {list.map((item)=>{
                    return (<li key={`uses-${item.name}`} className="group relative flex flex-col items-start">
                        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{item.name}</h3>
                        <p className="relative z-10 mt-2 text-sm text-zin-600 dark:text-zinc-400">{item.summary}</p>
                    </li>)
                })}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default UsesGallary;
