import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: 16,
          letterSpacing: '0.01em',
          fontWeight: 300,
          lineHeight: 1.5,
        }}
      >
        <div
          style={{
            width: 800,
            margin: '10px auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h1>E-learning App</h1>
            <div>
              • <a href="https://remix.run/docs/en/main">Remix Docs</a>
            </div>
          </div>
          <Outlet />
          <br style={{ clear: 'both' }} />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
