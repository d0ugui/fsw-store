import { ComponentProps } from "react";

export const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="mb-3 pl-5 font-bold uppercase xl:mb-5 xl:pl-0" {...props}>
      {children}
    </p>
  );
};
