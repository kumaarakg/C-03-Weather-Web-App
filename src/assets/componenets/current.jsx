import './weather.css'; // Import your CSS file for styling

const Weathercurrent = ({ city, temperature, weatherType, icon ,wind,humidity,cloud}) => {
  return (
    <div className="weather-container">
      <h2 className="city">{city}</h2>
      <div className="weather-details">
        <img src={icon} />
        <p className="temperature">{temperature}&deg;C</p>
        

      </div>
      <div className="weather-details">
      
      <p className="weather-type">{weatherType}</p>
      </div>
      <div className="weather-details">
        <p className="weather-type">Wind speed:{wind}kmph</p>
      </div>
      <div className="weather-details">
        <p className="weather-type">Humidity:{humidity}%</p>

      </div>
      <div className="weather-details">
        <p className="weather-type">{cloud} clouds</p>
      </div>
    </div>
  );
};

export default Weathercurrent;