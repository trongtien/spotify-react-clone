import { BrowseAllItem } from "@/types/browseSeach";
import { browseAll } from "./__mock_data__";
import useStoreBrowserList from "@/hooks/useListBrowserAll";


export const searchService = {
    getBowseAll: async (): Promise<BrowseAllItem[]> => {
        'use server'
        try {
            const browserListStored = useStoreBrowserList.getState().items
            if(browserListStored.length === 0){
                console.log("browserListStored load api")
                useStoreBrowserList.setState({items: browseAll})
                return browseAll;
            }

            return browserListStored
        } catch (error) {
            console.log('error', error)
            return []
        }
    },
}