import { useState } from "react";
import styles from "../../styles";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import weather from "../lotties/weather.json"
import Linechart from "./charts/Linechart";
import JSONPretty from "react-json-pretty";
const Input = () => {
    const [location, setLocation] = useState("");
    // const [data, setData] = useState("");
    const [hourlyData, setHourlyData] = useState("");
    const[CurrentData, setCurrentData]=useState("");
    const getWeather = () => {
        fetch("https://api.weatherapi.com/v1/forecast.json?key=cd8187028e6f488182a52355231105&q=" + location + "&days=1&aqi=yes&alerts=yes")
            .then((response) => response.json())
            .then((json) => {
                let temp = json.forecast.forecastday[0].hour
                setHourlyData({
                    labels: temp.map((vals) => vals.time),
                    datasets: [{
                        label: "Temperature",
                        data: temp.map((vals) => vals.temp_c)
                    }]
                })
                setCurrentData({json})

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
            <div>
            <p className="text-offWhite">{JSON.stringify(CurrentData.current)}</p>
            </div>
            {
                hourlyData != "" && <Linechart chartdata={hourlyData}/>
            }
        </>

    )
}
export default Input