import { PATH_API } from "@/utils/path";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const { SPOTIFY_CLIENT_SECRET, SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } =
    process.env;

  if (!code) {
    return new Response("Authorization code is missing", { status: 400 });
  }

  try {
    // Exchange authorization code for access token
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

    // Store the access token in a cookie (or use your preferred method for storing tokens)
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      `access_token=${access_token}; HttpOnly; Secure; Path=/; Max-Age=3600`
    ); // Set cookie with 1 hour expiration

    return new Response(null, {
      status: 302,
      headers: {
        ...headers,
        Location: "/", // Redirect to your dashboard after successful login
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to exchange token", { status: 500 });
  }
}
