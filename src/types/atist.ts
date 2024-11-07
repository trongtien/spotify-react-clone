interface Image {
    url: string;
    height: number;
    width: number;
}

interface Followers {
    total: number;
}

interface ExternalUrls {
    spotify: string;
}

interface Artist {
    id: string;
    name: string;
    genres: string[];
    images: Image[];
    followers: Followers;
    external_urls: ExternalUrls;
}

interface RelatedArtistsResponse {
    artists: Artist[];
}