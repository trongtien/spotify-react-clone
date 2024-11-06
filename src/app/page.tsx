"use client";

import CardPlay from "@/components/atoms/CardPlay";
import TitleBox from "@/components/atoms/TitleBox";

function Home() {
  const handleSpotifyLogin = () => {
    window.location.href = "/api/auth/login";
  };

  return (
    <div className="">
      <button onClick={handleSpotifyLogin} className="bg-red">
        Login with Spotify
      </button>
      <TitleBox title="Popular artists" className="mt-4" />
      <CardPlay />
    </div>
  );
}

export default Home;
