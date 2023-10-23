import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

export const PromoBanner = ({ className, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className={twMerge("h-auto w-full", className)}
      sizes="100vw"
      {...props}
    />
  );
};
