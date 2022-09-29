import { useState, useEffect } from 'react'
import Trip from './Trip'
import './App.css'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [trips, setTrips] = useState([])

  const removeTrip = (id) => {
    const newTrips = trips.filter((trip) => trip.id !== id)
    setTrips(newTrips)
  }

  const getTrips = async () => {
    const response = await fetch(url)
    const trips = await response.json()
    setTrips(trips)
  }
  useEffect(() => {
    getTrips()
  }, [])

  return (
    <main>
      <section>
        <h1 className='title'>Our Tours</h1>
        {trips.map((trip) => {
          return <Trip key={trip.id} {...trip} removeTrip={removeTrip} />
        })}
      </section>
    </main>
  )
}

export default App
