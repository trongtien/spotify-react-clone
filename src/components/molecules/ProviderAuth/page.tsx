'use client'
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren, useEffect } from 'react';

function AuthProvider({ children }: PropsWithChildren) {
  const handleLogin = async () => {
    // Redirect to your backend login route
    window.location.href = '/api/auth/login'; // Adjust this path as necessary
  };

  useEffect(() => {
    // Ensure the URL is available
    if (typeof window !== 'undefined') {
      // Log the current URL for debugging


      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('access_token');
      if (accessToken) {
        // Store the access token in local storage
        localStorage.setItem('spotify_access_token', accessToken);
        // Optionally, redirect to the home page or another page
        window.location.href = '/home'; // Adjust this path as necessary
      } else {
        console.warn("Access token not found in URL.");
      }
    }
  }, []);

  return (
    <>
      <button onClick={handleLogin} className='shadow-primary w-56 h-16 rounded-xl bg-white border-0 text-black text-3xl active:scale-[0.99] m-6'>Sign In</button>
      {children}
    </>
  );
}

export default AuthProvider;
