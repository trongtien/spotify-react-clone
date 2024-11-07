'use client'

import React, { memo } from "react"

interface BannerGenderProps {
    id: string
}

const BannerGender: React.FC<BannerGenderProps> = ({ id }) => {
    return (
        <div className="w-full h-80 bg-cover rounded-lg flex flex-col p-4 justify-end items-start gap-2" style={{ background: 'url(https://i.scdn.co/image/ab67706f00000002a52e06b0131a3ce7cdede690)' }}>
            <p className="text-base">Playlist</p>
            <h1 className="text-3xl font-bold">Thowback Thursday</h1>
            <p className="text-sm text-slate-500">#SpotifyTBT celebrates 5 years of Hot Pink. Cover: Doja Cat</p>
            <p className="text-sm text-slate-500">• 2,296,357 saves • 50 songs, about 2 hr 30 min</p>
        </div>
    )
}

export default memo(BannerGender)