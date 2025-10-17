'use client';

import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function SignedInToast() {
  const searchParams = useSearchParams();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const logoutStatus = searchParams.get('logout');

    if (logoutStatus === 'success') {
      toast.success('Logged out successfully!');
      window.history.replaceState(null, '', '/');
    }
  }, [searchParams]);

  useEffect(() => {
    if (isLoaded) {
      const wasSignedIn = sessionStorage.getItem('wasSignedIn');

      if (wasSignedIn === 'false' && isSignedIn === true) {
        toast.success('Logged in successfully!');
      }

      sessionStorage.setItem('wasSignedIn', isSignedIn);
    }
  }, [isLoaded, isSignedIn]);

  return null;
}