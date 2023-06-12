import React, { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

interface Props {
  children: ReactNode
}

const QueryProvider: FC = ({ children }) => {
  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
}

export default QueryProvider;


