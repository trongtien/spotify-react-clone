import TitleBox from "@/components/atoms/TitleBox";
import React, { PropsWithChildren } from "react";

type PopularProps = PropsWithChildren & {
  title: string;
  link?: string;
};

const Popular: React.FC<PopularProps> = ({ children, title, link }) => {
  return (
    <section className="w-full flex flex-col gap-1">
      <TitleBox title={title} link={link} />
      <div className="grid grid-cols-7 gap-4 max-w-full">{children}</div>
    </section>
  );
};

export default Popular;
