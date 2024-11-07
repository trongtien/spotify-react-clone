import { createStore } from "zustand";

interface StoredFeatireChartProps {
    items: RelatedArtistsResponse | null,
    time: number | null
    updateItems: (items: RelatedArtistsResponse | null) => void
}

const usePopularFeatireChart = createStore<StoredFeatireChartProps>((set) => ({
    items: null,
    time: null,
    updateItems: (items) => set((state) => ({
        ...state,
        items: items,
        time: items === null ? null : Date.now()
    }))
}))

export default usePopularFeatireChart