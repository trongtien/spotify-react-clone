import React from "react";

import PopularAtist from "./_components/PopularArtist";
import artistService from "@/services/artist.service";


const Home = async () => {
  const [atristReleaseResponse] = await Promise.all([
    artistService.getAll(),
  ]);

  return (
    <div className="">
      <PopularAtist items={atristReleaseResponse?.artists?.map((el) => ({
        content: el.name,
        image: el.images?.[0]?.url ?? '',
        title: el.name,
        isArtist: true
      })) ?? []} />
    </div>
  );
};

export default Home;
