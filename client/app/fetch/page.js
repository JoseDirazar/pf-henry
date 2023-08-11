
import React from 'react'
const fetchingData = () => {return fetch('http://localhost:3001/events').then(res => res.json())}

export default async function FetchEvents({ params }) {
    const post = await fetchingData()
    return(
    <main>
      {post.events.map(event => {
        return <>
          <h1>{event.title}</h1>
          <h2>{event.type}</h2>
        </>
      })}
    </main>
  )
}
