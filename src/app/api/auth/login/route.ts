export async function GET() {
  console.log("process ", process.env);
  const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI = "" } = process.env;
  const scopes = "user-library-read user-read-private"; // Adjust your scopes as needed
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
    scopes
  )}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: authUrl, // Redirect the user to Spotify's login page
    },
  });
}
