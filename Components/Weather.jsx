import Image from "next/image";
import React from "react";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto  text-gray-300 z-10">
      <div className="relative flex flex-col  justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            alt="/"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            height="200"
            width="200"
          />
          <h1 className="text-6xl  ">
            Temp:{weatherData.main.temp.toFixed(1)}&#8451;
          </h1>
        </div>
        {/*Bottom */}
        <div className="flex justify-between ">
          <div className=" bg-black/50 relative p-2 ml-0 mr-36 mt-16 sm:mr-2 rounded-md ">
            <h1 className="text-5xl ">
              Min Temp:{weatherData.main.temp_min.toFixed(1)}&#8451;
            </h1>
            <h1 className="text-5xl">
              Max Temp:{weatherData.main.temp_max.toFixed(1)}&#8451;
            </h1>
          </div>
          <div className="bg-black/50 relative p-8 mt-16  rounded-md">
            <h1 className="text-5xl">Location:{weatherData.name}</h1>
            <h1 className="text-5xl">Counry:{weatherData.sys.country}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
