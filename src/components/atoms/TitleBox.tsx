import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface TitleBoxProps {
  title: string;
  className?: string;
  link?: string;
}

const TitleBox: React.FC<TitleBoxProps> = ({ title, className, link }) => {
  if (link && link.length > 0) {
    return (
      <Link
        className={twMerge("font-bold text-2xl hover:underline", className)}
        href={link || ""}
      >
        {title}
      </Link>
    );
  }
  
  return <h2 className={twMerge("font-bold text-2xl", className)}>{title}</h2>;
};

export default TitleBox;
