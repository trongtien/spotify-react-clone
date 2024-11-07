'use client'
import CardPlay, { CardProps } from "@/components/atoms/CardPlay"
import Popular from "@/components/molecules/Popular"


interface PopularPlaylistEditorProps {
    items: Pick<CardProps, 'content' | 'image' | 'isArtist' | 'title'>[]
}

const PopularPlaylistEditor: React.FC<PopularPlaylistEditorProps> = ({ items }) => {
    return <Popular title="Featured Charts">
        {
            items?.map((el, index) => <CardPlay key={index} {...el} />)
        }
    </Popular>
}

export default PopularPlaylistEditor