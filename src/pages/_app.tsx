import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from 'stitches.config';

// --- Context
import { ContextProvider } from '@/context/ContextProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light" // system
      value={{
        light: "light",
        dark: darkTheme.className
      }}
    >
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  )
}
