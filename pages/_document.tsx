import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full w-full m-0 p-0">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="min-h-[calc(100%+8rem) w-full  m-0 p-0 box-border">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
