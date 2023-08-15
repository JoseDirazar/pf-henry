
import React from 'react'
const fetchingData = () => {return fetch('http://localhost:3001/events').then(res => res.json())}

export default async function FetchEvents({ params }) {
    const post = await fetchingData()
    return(
      <div className="p-8">
      {post.events.map(event => (
        <div key={event.id} className="mb-4 p-4 bg-black-100 rounded shadow-md">
          <h2 className="text-gray-600">{event.type.split('_').join(" ")}</h2>
          <h1 className="text-xl font-semibold mb-2">{event.title}</h1>
        </div>
      ))}
    </div>
  )
}
