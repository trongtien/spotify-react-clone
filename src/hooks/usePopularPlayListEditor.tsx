import { createStore } from "zustand";

interface StoredPopularPlayListEditorProps {
    items: RelatedArtistsResponse | null,
    time: number | null
    updateItems: (items: RelatedArtistsResponse | null) => void
}

const useStoredPopularPlayListEditor = createStore<StoredPopularPlayListEditorProps>((set) => ({
    items: null,
    time: null,
    updateItems: (items) => set((state) => ({
        ...state,
        items: items,
        time: items === null ? null : Date.now()
    }))
}))

export default useStoredPopularPlayListEditor