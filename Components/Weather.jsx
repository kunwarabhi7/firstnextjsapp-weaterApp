import Image from 'next/image'
import React from 'react'

const Weather = ({weatherData}) => {
 console.log(weatherData)
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10' >
        <div>
            <div>
                <Image alt='/' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} height='200' width='200' />
            </div>
            <div className='bg-black/50 relative p-8 rounded-md'>
<h1 className='text-4xl'>Temp:{weatherData.main.temp.toFixed(1)}&#8451;</h1>
<h1 className='text-2xl'>Min Temp:{weatherData.main.temp_min.toFixed(1)}&#8451;</h1>
<h1 className='text-2xl'>Max Temp:{weatherData.main.temp_max.toFixed(1)}&#8451;</h1>
                <h1 className='text-4xl'>Location:{weatherData.name}</h1>
                <h1 className='text-4xl'>Counry:{weatherData.sys.country}</h1>
            </div>
            </div>
    </div>
  )
}

export default Weather