'use client'

import { memo } from "react"
import ListPlayItem from "./ListPlayItem"
import ListPlayTitle from "./ListPlayTitle"

const ListPlay = () => {
    return <table className="table-auto w-full">
        <ListPlayTitle />
        <tbody className="p-2">
            <ListPlayItem
                stt={1}
                dataAdded={'Malcolm Lockyer'}
                title={'Malcolm Lockyer'}
                album={'The Sliding Mr. Bones (Next Stop, Pottersville)'}
                time={1961}
                artist={'1961'}
            />
            <ListPlayItem
                stt={1}
                dataAdded={'Malcolm Lockyer'}
                title={'Malcolm Lockyer'}
                album={'The Sliding Mr. Bones (Next Stop, Pottersville)'}
                time={1961}
                artist={'1961'}
            />
            <ListPlayItem
                stt={1}
                dataAdded={'Malcolm Lockyer'}
                title={'Malcolm Lockyer'}
                album={'The Sliding Mr. Bones (Next Stop, Pottersville)'}
                time={1961}
                artist={'1961'}
            />
        </tbody>
    </table>
}

export default memo(ListPlay)