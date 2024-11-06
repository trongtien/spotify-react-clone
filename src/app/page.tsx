"use client";

import Popular from "@/components/molecules/Popular";

function Home() {
  // const handleSpotifyLogin = () => {
  //   window.location.href = "/api/auth/login";
  // };

  return (
    <div className="">
      {/* <button onClick={handleSpotifyLogin} className="bg-red">
        Login with Spotify
      </button> */}
      <Popular items={[]} />
    </div>
  );
}

export default Home;
