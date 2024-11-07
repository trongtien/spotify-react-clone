import React from "react";

import artistService from "@/services/artist.service";
import PopularAtist from "./_components/PopularArtist";
import PopularFeaturedChart from "./_components/PopularFeaturedChart";
import PopularPlaylistEditor from "./_components/PopularPlaylistEditor";


const Home = async () => {
  const [atristReleaseResponse, featureResponse, playlistEditorResponse] = await Promise.all([
    artistService.getAll(),
    artistService.featireChart(),
    artistService.playListEditor(),
  ]);

  return (
    <div className="w-full h-auto flex flex-col gap-10 overflow-x-auto">
      <PopularAtist items={atristReleaseResponse?.artists?.map((el) => ({
        content: el.name,
        image: el.images?.[0]?.url ?? '',
        title: el.name,
        isArtist: true,
        link: '/playlist/37i9dQZEVXbNG2KDcFcKOF'
      })) ?? []} />

      <PopularFeaturedChart items={featureResponse?.artists?.map((el) => ({
        image: el.images?.[0]?.url ?? '',
        title: el.name,
        isArtist: false,
        link: '/playlist/37i9dQZEVXbNG2KDcFcKOF'
      })) ?? []} />

      <PopularPlaylistEditor items={playlistEditorResponse?.artists?.map((el) => ({
        content: el.name,
        image: el.images?.[0]?.url ?? '',
        title: el.name,
        isArtist: false,
        link: '/playlist/37i9dQZEVXbNG2KDcFcKOF'
      })) ?? []} />
    </div>
  );
};

export default Home;