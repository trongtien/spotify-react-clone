import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify"; // Import Spotify provider

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID || "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope: "user-read-email user-read-private user-library-read", // Add any additional scopes you need
        },
      },
      // Callback to handle the access token
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images[0]?.url,
          accessToken: profile.access_token, // Store the access token
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      // Persist the access token to the token object
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Add the access token to the session object
      session.accessToken = token.accessToken;
      return session;
    },
  },
  // Add any additional NextAuth options here
};

export default NextAuth(authOptions); // Export the NextAuth instance 