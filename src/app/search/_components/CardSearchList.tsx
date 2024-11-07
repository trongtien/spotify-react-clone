'use client'

import React from "react"
import CardSearchItem, { CardSearchItemProps } from "./CardSearchItem"

export interface CardSearchListProps {
    items: Pick<CardSearchItemProps, 'image' | 'title' | 'link' | 'color'>[]
}

const CardSearchList: React.FC<CardSearchListProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-4 w-full gap-8 max-w-full">
            {
                items?.map((el) =>
                    <CardSearchItem key={el.link} image={el.image} title={el.title} link={el.link} color={el.color} />
                )
            }
        </div>
    )
}

export default CardSearchList