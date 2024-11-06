// pages/api/playlists.js
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  console.log("req.cookies", req.cookies);

  const { access_token } = req.cookies;
  if (!access_token) {
    return res.status(401).json({ error: "User not authenticated" });
  }

  try {
    // Fetch the user's playlists using the access token
    const playlistsResponse = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    // Return the playlists as a JSON response
    res.status(200).json(playlistsResponse.data);
  } catch (error) {
    console.error("Error fetching playlists:", error);
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
}
