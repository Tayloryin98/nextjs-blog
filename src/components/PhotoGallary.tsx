import Image, { StaticImageData } from "next/image";
import { FC } from "react";

export interface PhotoGallaryProps {
  _id: string;
  img: StaticImageData;
}

const PhotoGallary: FC<PhotoGallaryProps> = ({ _id, img }) => {
  return (
    <div className="relative odd:rotate-2  even:-rotate-2 aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-xl">
      <Image
        className="absolute inset-0 h-full object-cover"
        src={img}
        alt={_id}
        width={300}
        height={300}
      ></Image>
    </div>
  );
};

export default PhotoGallary;
