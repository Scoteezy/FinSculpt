
'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

const SessionProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
