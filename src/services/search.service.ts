import { BrowseAllItem } from "@/types/browseSeach";
import { browseAll } from "./__mock_data__";



export const searchService = {
    getBowseAll: async (): Promise<BrowseAllItem[]> => {
        'use server'
        try {
            return browseAll;
        } catch (error) {
            console.log('error', error)
            return []
        }
    },
}