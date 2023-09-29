"use client";

import { FC, ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children}) => {
  return (
      <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {children}
        </NextUIProvider>
        </QueryClientProvider>
  );
};

export default Providers;

