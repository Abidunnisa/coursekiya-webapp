import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const AppRouter = dynamic(() => import("./router/AppRouter"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen">
      {/* Wrap the AppRouter with AuthProvider */}
      <AppRouter Component={Component} pageProps={pageProps} />
    </main>
  );
}