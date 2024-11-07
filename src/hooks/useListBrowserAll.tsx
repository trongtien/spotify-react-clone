import { BrowseAllItem } from "@/types/browseSeach";
import { createStore } from "zustand";


interface StoreBrowserList {
    items: BrowseAllItem[]
    updateItems: (items: BrowseAllItem[]) => void
}


const useStoreBrowserList = createStore<StoreBrowserList>((set) => ({
    items: [],
    updateItems: (items: BrowseAllItem[]) => set((state) => ({
        ...state,
        items: items
    }))
}))

export default useStoreBrowserList