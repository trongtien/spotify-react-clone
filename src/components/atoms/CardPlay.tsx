'use client'

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { FaPlay } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

export interface CardProps {
  className?: string;
  isArtist?: boolean;
  image?: string;
  title?: string;
  content?: string;
  link?: string;
}

const CardPlay: React.FC<CardProps> = ({
  className,
  isArtist = false,
  title,
  content,
  image,
  link = ''
}) => {

  const cardRef = useRef<HTMLAnchorElement | null>(null)

  return (
    <Link
      href={link}
      ref={cardRef}
      className={twMerge(
        "max-w-64 h-56 flex flex-col justify-center items-center gap-1 relative cursor-pointer overflow-hidden",
        "group hover:bg-slate-500 hover:bg-opacity-5 hover:rounded-md",
        className
      )}
    >
      <Image
        className={twMerge(
          "mb-1 shadow-lg border-1 border-b-neutral-500 bg-cover",
          isArtist ? "rounded-full" : "rounded-lg"
        )}
        src={image || ""}
        alt="img"
        width={isArtist ? 130 : 256}
        height={isArtist ? 130 : 150}
      />

      <h3 className="text-base font-medium w-full text-start">{title}</h3>

      {content ? <p className="text-sm text-slate-400  w-full text-start">{content}</p> : null}

      <p
        className={twMerge(
          "absolute bottom-10 right-2 rounded-full p-3 bg-lime-600 text-white font-medium",
          "transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
        )}
      >
        <FaPlay />
      </p>
    </Link>
  );
};

export default CardPlay;
