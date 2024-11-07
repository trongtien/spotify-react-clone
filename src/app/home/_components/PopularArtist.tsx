'use client'

import CardPlay, { CardProps } from "@/components/atoms/CardPlay"
import Popular from "@/components/molecules/Popular"
import React from "react"

interface PopularAtistProps {
    items: Pick<CardProps, 'content' | 'image' | 'isArtist' | 'title' | 'link' >[]
}

const PopularAtist: React.FC<PopularAtistProps> = ({ items }) => {
    return <Popular title="Popular Artists">
        {
            items?.map((el, index) => <CardPlay key={index} {...el} />)
        }
    </Popular>
}

export default PopularAtist