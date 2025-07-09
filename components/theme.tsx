// components/ClientThemeProvider.tsx
"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function ClientThemeProvider({
  children,                      
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render children without ThemeProvider during SSR
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}