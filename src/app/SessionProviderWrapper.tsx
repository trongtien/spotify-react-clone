"use client"; // This makes the component a Client Component

import { SessionProvider } from "next-auth/react";

const SessionProviderWrapper = ({ children, session }: any) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviderWrapper; 