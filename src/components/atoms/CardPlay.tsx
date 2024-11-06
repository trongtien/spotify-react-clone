import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  isArtist?: boolean;
  image?: string;
  title?: string;
  content?: string;
}

const CardPlay: React.FC<CardProps> = ({
  className,
  isArtist = false,
  title,
  content,
  image,
}) => {
  return (
    <div
      className={twMerge(
        "w-64 h-36 flex flex-col p-2 justify-center items-start gap-1 mt-4",
        className
      )}
    >
      <Image
        className={twMerge(
          "mb-1  shadow-lg border-1 border-b-neutral-500",
          isArtist ? "rounded-full" : "rounded-lg"
        )}
        src={image || ""}
        alt="img"
        width={isArtist ? 140 : 150}
        height={isArtist ? 140 : 150}
      />
      <h3 className="text-base font-medium">${title}</h3>
      {content ? <p className="text-sm text-slate-400">${content}</p> : null}
    </div>
  );
};

export default CardPlay;
