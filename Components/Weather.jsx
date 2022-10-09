import Image from "next/image";
import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      <div className="relative flex   justify-between pt-12">
        <div className="flex flex-col ">
          <Image
            alt="/"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            height="100"
            width="100"
          />
          <p className="text-xl ">{weatherData.weather[0].main}</p>
        </div>
        <p className="text-8xl md:text-2xl sm:text-2xl">
          Temp:{weatherData.main.temp.toFixed(1)}&#8451;
        </p>
      </div>

      {/*Bottom */}
      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">
          Weather in {weatherData.name}
        </p>
        <div className="flex justify-between text-center">
          <div>
          <p className="font-bold text-2xl">{weatherData.main.temp_min.toFixed(1)}&#8451;</p>
          <p className="text-xl">Min Temp </p>
            </div>

            <div>
            <p className="font-bold text-2xl">
              {weatherData.main.temp_max.toFixed(1)}&#8451;
            </p>
            <p className="text-xl">Max Temp</p>
          </div>
          <div>
              <p className="font-bold text-2xl">{weatherData.sys.country}</p>
              <p className="text-xl">Counry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
