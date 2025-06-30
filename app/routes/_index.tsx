import { defer, Await, useLoaderData } from '@remix-run/react'
import { Suspense } from 'react'

export async function loader({ context: { env } }) {
 return ("Welcome to the E-learning App!")
}

// keep the home page data in memory so back clicks are instant and the data
// doesn't change
let cache
export async function clientLoader({ serverLoader }) {
  if (cache) return { query: cache }

  let loaderData = await serverLoader()
  let query = await loaderData.query
  cache = query
  return { query }
}

// So that the client loader is called on initial load
clientLoader.hydrate = true

export default function Home() {

  return (
    <>
      <title>Data Loading in Remix</title>
      <p>
        Use Command + K to search. Here are a few random movies from the
        database
      </p>
      <Suspense fallback={<Loading />}>
        
      </Suspense>
    </>
  )
}

function Loading() {
  return (
    <ul>
      {Array.from({ length: 12 }).map((_, i) => (
        <li key={i}>
          <RandomLengthDashes /> <RandomLengthDashes /> <RandomLengthDashes />
        </li>
      ))}
    </ul>
  )
}

function RandomLengthDashes() {
  return <span>{'-'.repeat(Math.floor(Math.random() * 20))}</span>
}
