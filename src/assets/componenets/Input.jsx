import { useState } from "react";
import styles from "../../styles";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import weather from "../lotties/weather.json"
import Linechart from "./charts/Linechart";
import JSONPretty from "react-json-pretty";
import Weathercurrent from "./current";
const Input = () => {
    const [location, setLocation] = useState("");
    
    const [hourlyData, setHourlyData] = useState("");
    const[CurrentData, setCurrentData]=useState("");
    let city,temperature,weatherType,icon;
    const getWeather = () => {
        fetch("https://api.weatherapi.com/v1/forecast.json?key=cd8187028e6f488182a52355231105&q=" + location + "&days=1&aqi=yes&alerts=yes")
            .then((response) => response.json())
            .then((json) => {
                
                setHourlyData({
                    labels: temp.map((vals) => vals.time),
                    datasets: [{
                        label: "Temperature",
                        data: temp.map((vals) => vals.temp_c)
                    }]
                })
                setCurrentData({
                    name: json.location.name,
                    weatherType: json.current.condition.text,
                    temperature: json.current.temp_c,
                    icon: json.current.condition.icon
                })

            })
    }
    return (
        <>
            <div className="flex flex-wrap justify-center">
                <div className="basis-full flex items-center justify-center md:basis-7/12">
                    <form>
                        <input
                            type="text"
                            value={location}
                            className={styles.textbox}
                            placeholder="Enter the Location..."
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </form>
                    <button className={styles.btn} onClick={getWeather}>Get Forecast</button>
                </div>
                <div className="basis-full md:basis-5/12">
                    <div className="flex justify-center">
                        <Player
                            autoplay
                            loop
                            src={weather}
                            style={{ height: "512px" }}
                        >
                            <Controls
                                visible={false}
                                buttons={["play", "repeat", "frame", "debug"]}
                            />
                        </Player>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
            <div className="basis-full flex items-center justify-center md:basis-7/12">
                
                
           

           </div>
           

           </div>
            <div className="flex flex-wrap justify-cente">
            {
                
                hourlyData != "" && <Linechart chartdata={hourlyData}/>
            }
            {
                
                CurrentData != "" && <Weathercurrent 
                
                 city={CurrentData.name}
                 temperature={CurrentData.temperature}
                 weatherType={CurrentData.weatherType}
                 icon={CurrentData.icon}
      
                />
            }
            </div>
           
            
        </>

    )
}
export default Input