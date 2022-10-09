import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
const [cityName, setCityName] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=bhiwani&appid={process.env.NEXT_PUBLIC_WEATHER_KEY}`

  return (
    <div>
      <Head>
        <title>Weather  Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<h1>NEXT JS App</h1>

<input type="text" value={cityName} onChange={e=>setCityName(e.target.value)} />
      
    </div>
  )
}
