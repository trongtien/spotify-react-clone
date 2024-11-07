import { createStore } from "zustand";

interface StorePopularArtistProps {
    items: RelatedArtistsResponse | null,
    time: number | null
    updateItems: (items: RelatedArtistsResponse | null) => void
}

const useStorePopularArtist = createStore<StorePopularArtistProps>((set) => ({
    items: null,
    time: null,
    updateItems: (items) => set((state) => ({
        ...state,
        items: items,
        time: items === null ? null : Date.now()
    }))
}))

export default useStorePopularArtist