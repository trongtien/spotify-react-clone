import { featureCharts, playListEditors, relatedArtists } from "./__mock_data__";

const artistService = {
    getAll: async (): Promise<RelatedArtistsResponse | null> => {
        'use server'
        try {
            return relatedArtists;
        } catch (error) {
            console.log('error', error)
            return null
        }
    },

    featireChart: async (): Promise<RelatedArtistsResponse | null> => {
        'use server'
        try {
            return featureCharts;
        } catch (error) {
            console.log('error', error)
            return null
        }
    },

    playListEditor: async (): Promise<RelatedArtistsResponse | null> => {
        'use server'
        try {
            return playListEditors;
        } catch (error) {
            console.log('error', error)
            return null
        }
    }
}

export default artistService