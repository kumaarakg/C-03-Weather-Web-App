import Axios from 'axios'


const apiID="a8659a997d9dbe2120eaf50ca4347415";
const query="London";


const Input = () => {
    const getWeather=() =>{
        fetch("http://api.weatherapi.com/v1/forecast.json?key=cd8187028e6f488182a52355231105&q="+query+"&days=1&aqi=yes&alerts=yes")
        .then((response)=> response.json())
        .then((json)=> console.log(json))
    
    }
    return(
            <><p className="text-offWhite">Input</p><button className="px-3 py-2 m-2 bg-transparent border-2 border-secondary rounded-md text-2xl text-offWhite hover:border-slate-700 transition-all hover:translate-x-0.5 hover:-translate-y-0.5 delay-100 ease-in-out" onClick={getWeather}>Button</button></>
        
    )
}
export default Input