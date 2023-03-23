import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="font" crossOrigin="anonymous" />
          {/* <style>
            {`
              .MuiSvgIcon-root {
                opacity: 0;
                transition: opacity 0.3s;
              }

              .MuiSvgIcon-root.fontLoaded {
                opacity: 1;
              }
            `}
          </style> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                document.fonts.ready.then(function () {
                  const icons = document.querySelectorAll('.MuiSvgIcon-root');
                  icons.forEach((icon) => {
                    icon.classList.add('fontLoaded');
                  });
                });
              `,
            }}
          /> */}
        </body>
      </Html>
    )
  }
}
export default MyDocument;

