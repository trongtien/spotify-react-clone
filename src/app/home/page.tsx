import React from "react";
import Popular from "@/components/molecules/Popular";
import { getArtist, getTest } from "@/action/home";


const Home = async () => {
  const [log, test] = await Promise.all([
    getArtist(),
    getTest()
  ]);

  return (
    <div className="">
      <Popular title="Popular Artists">{JSON.stringify(log)}</Popular>
      <Popular title="Popular Artists">{JSON.stringify(test)}</Popular>
    </div>
  );
};

export default Home;
