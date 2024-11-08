import { PATH_API } from "@/utils/path";
import axios from "axios";

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const { SPOTIFY_CLIENT_SECRET, SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } = process.env;

  if (!code) {
    return new Response("Authorization code is missing", { status: 400 });
  }

  try {
    const response = await axios.post(PATH_API.AUTH_ACCOUNT, null, {
      params: {
        grant_type: "authorization_code",
        code,
        redirect_uri: SPOTIFY_REDIRECT_URI,
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }); 

    const { access_token, refresh_token } = response.data;

    // Set the access token in cookies
    const headers = new Headers();
    headers.append("Set-Cookie", `access_token=${access_token}; Path=/; Max-Age=3600; HttpOnly;`);
    headers.append("Set-Cookie", `refresh_token=${refresh_token}; Path=/; Max-Age=3600;`);

    // Redirect to the home page after successful login
    return new Response(null, {
      status: 302,
      headers: {
        ...headers,
        Location:  `/home?access_token=${encodeURIComponent(access_token)}`,
      },
    });
  } catch (error) {
    return new Response("Error retrieving access token", { status: 500 });
  }
} 