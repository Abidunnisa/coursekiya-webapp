import { Html, Head, Main, NextScript } from "next/document";
import { coursekiyafavicon } from "public";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={coursekiyafavicon.src} sizes="any" />
        {/* Optional: support for PNG/SVG favicons */}
        <link rel="icon" type="image/png" href={coursekiyafavicon.src} className="rounded-2xl"/>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
