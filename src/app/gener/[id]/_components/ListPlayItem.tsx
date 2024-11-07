'use client'

import { memo } from "react"

interface ListPlayItemProps {
    stt?: number;
    title?: string;
    album?: string;
    dataAdded?: string;
    time?: string | number;
    artist?: string;
}

const ListPlayItem: React.FC<ListPlayItemProps> = ({
    stt,
    title,
    album,
    dataAdded,
    artist,
    time
}) => {
    return (
        <tr className="cursor-pointer hover:bg-zinc-400">
            <td>{stt || ''}</td>
            <td className="font-bold text-while">{title || ''}</td>
            <td>{artist || ''}</td>
            <td>{album || ''}</td>
            <td>{dataAdded || ''}</td>
            <td>{time || ''}</td>
        </tr>
    )
}

export default memo(ListPlayItem)