import './weather.css'; // Import your CSS file for styling

const Weathercurrent = ({ city, temperature, weatherType, icon ,wind,humidity,cloud}) => {
  return (
    <div className="weather-container">
      <h2>{city}</h2>
      <div className="weather-details">
        <img src={icon} />
        <p className="temperature">{temperature}&deg;C</p>
        <p className="weather-type">{weatherType}</p>

      </div>
      <div className="weather-details">
        <p className="weather-type">{wind}kmph</p>
      </div>
      <div className="weather-details">
        <p className="weather-type">humidity={humidity}%</p>

      </div>
      <div className="weather-details">
        <p className="weather-type">{cloud} clouds</p>
      </div>
    </div>
  );
};

export default Weathercurrent;