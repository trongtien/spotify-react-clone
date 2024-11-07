import CardPlay, { CardProps } from "@/components/atoms/CardPlay"
import Popular from "@/components/molecules/Popular"

interface PopularFeaturedChartProps {
    items: Pick<CardProps, 'content' | 'image' | 'isArtist' | 'title'>[]
}

const PopularFeaturedChart: React.FC<PopularFeaturedChartProps> = ({ items }) => {
    return <Popular title="Featured Charts">
        {
            items?.map((el, index) => <CardPlay key={index} {...el} />)
        }
    </Popular>
}

export default PopularFeaturedChart