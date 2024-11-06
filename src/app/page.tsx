"use client";

import CardPlay from "@/components/atoms/CardPlay";

function Home() {
  const handleSpotifyLogin = () => {
    window.location.href = "/api/auth/login";
  };

  return (
    <div className="">
      <button onClick={handleSpotifyLogin} className="bg-red">
        Login with Spotify
      </button>
      <CardPlay />
    </div>
  );
}

export default Home;
