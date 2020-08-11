import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />

          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/static/favicon.ico" />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossorigin="anonymous"
          />
        </Head>

        <body>
          <noscript>
            <div>
              <h1>
                Necesitas tener JS activado para que Delis pueda funcionar
              </h1>
              <p>
                Si no sabes como hacerlo ponte en contacto con soporte tecnico.
              </p>
            </div>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
