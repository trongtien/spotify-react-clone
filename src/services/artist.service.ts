import { relatedArtists } from "./__mock_data__";

const artistService = {
    getAll: async (): Promise<RelatedArtistsResponse| null > => {
    'use server'
    try {
        return relatedArtists;
    } catch (error) {
        console.log('error', error)
        return null
    }
}
}

export default artistService