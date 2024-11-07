import useStorePopularArtist from "@/hooks/usePopularArtists";
import { featureCharts, playListEditors, relatedArtists } from "./__mock_data__";
import { isClearTimeCache, TIME_VALID_MAX } from "@/utils/validateTimeCache";
import usePopularFeatireChart from "@/hooks/usePopularFeatireChart";
import useStoredPopularPlayListEditor from "@/hooks/usePopularPlayListEditor";

const artistService = {
    getAll: async (): Promise<RelatedArtistsResponse | null> => {
        'use server'
        try {
            const mockData = relatedArtists
            const time = useStorePopularArtist.getState().time
            const items = useStorePopularArtist.getState().items

            if (isClearTimeCache(time, TIME_VALID_MAX.ONE_HOUSE) && items === null) {
                useStorePopularArtist.getState().updateItems(mockData)
                return mockData
            }

            return items;
        } catch (error) {
            console.log('error', error)
            return null
        }
    },

    featireChart: async (): Promise<RelatedArtistsResponse | null> => {
        'use server'
        try {
            const mockData = featureCharts
            const time = usePopularFeatireChart.getState().time
            const items = usePopularFeatireChart.getState().items

            if (isClearTimeCache(time, TIME_VALID_MAX.ONE_HOUSE) && items === null) {
                usePopularFeatireChart.getState().updateItems(mockData)
                return mockData
            }

            return items;
        } catch (error) {
            console.log('error', error)
            return null
        }
    },

    playListEditor: async (): Promise<RelatedArtistsResponse | null> => {
        'use server'
        try {
            const mockData = playListEditors
            const time = useStoredPopularPlayListEditor.getState().time
            const items = useStoredPopularPlayListEditor.getState().items

            if (isClearTimeCache(time, TIME_VALID_MAX.ONE_HOUSE) && items === null) {
                useStoredPopularPlayListEditor.getState().updateItems(mockData)
                return mockData
            }

            return items;
        } catch (error) {
            console.log('error', error)
            return null
        }
    }
}

export default artistService