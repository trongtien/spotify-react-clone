'use client'
import TitleBox from "@/components/atoms/TitleBox"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export interface CardSearchItemProps {
    title?: string
    image?: string
    link?: string
    color?: string
}

const CardSearchItem: React.FC<CardSearchItemProps> = ({
    title,
    image,
    link = '',
    color
}) => {
    return (
        <Link href={link} style={{ background: color }} className="h-44 bg-pink-500 shadow-lg rounded-lg overflow-hidden flex justify-between p-4">
            <TitleBox title={title || ''} className="text-2xl" />
            <Image className="rotate-[24deg] translate-x-8 translate-y-7" src={image || ''} width={170} height={100} alt="img search" />
        </Link>
    )
}

export default CardSearchItem