import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} global />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
