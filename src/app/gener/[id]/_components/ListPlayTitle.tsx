'use client'

import { memo } from "react"


const ListPlayTitle = () => {
    return (
        <thead className="border-b border-b-1 pb-2">
            <tr className="text-while text-start">
                <th className="text-start">#</th>
                <th className="text-start">Title</th>
                <th className="text-start">Artist</th>
                <th className="text-start">Album</th>
                <th className="text-start">Data added</th>
                <th className="text-start">Time</th>
            </tr>
        </thead>
    )
}

export default memo(ListPlayTitle)