import { useState } from "react";
import styles from "../../styles";
const Input = () => {
    const [location, setLocation] = useState("");
    const [data, setData] = useState("");
    const getWeather = () => {
        fetch("https://api.weatherapi.com/v1/forecast.json?key=cd8187028e6f488182a52355231105&q=" + location + "&days=1&aqi=yes&alerts=yes")
            .then((response) => response.json())
            .then((json) => setData(json))
    }
    return (
        <>
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
            {
                data != "" && (
                    <p className="text-offWhite"> {JSON.stringify(data)} </p>
                )
            }
        </>

    )
}
export default Input