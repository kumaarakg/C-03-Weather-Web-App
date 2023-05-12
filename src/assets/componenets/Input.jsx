const query = "Paris";


const Input = () => {
    const getWeather = () => {
        fetch("https://api.weatherapi.com/v1/forecast.json?key=cd8187028e6f488182a52355231105&q=" + query + "&days=1&aqi=yes&alerts=yes")
            .then((response) => response.json())
            .then((json) => console.log(json))

    }
    return (
        <>
            <button className="px-3 py-2 m-2 bg-transparent border-2 border-secondary rounded-md text-2xl text-offWhite hover:border-slate-700 transition-all hover:translate-x-0.5 hover:-translate-y-0.5 delay-100 ease-in-out" onClick={getWeather}>Get Forcast</button>
        </>

    )
}
export default Input