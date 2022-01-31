import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full w-full m-0 p-0">
        <Head />
        <body className="min-h-[calc(100vh+8rem) w-full  m-0 p-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
