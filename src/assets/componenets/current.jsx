import './weather.css'; // Import your CSS file for styling

const Weathercurrent = ({ city, temperature, weatherType, icon }) => {
  return (
    <div className="weather-container">
      <h2>{city}</h2>
      <div className="weather-details">
        <img src={icon} />
        <p className="temperature">{temperature}&deg;C</p>
        <p className="weather-type">{weatherType}</p>
      </div>
    </div>
  );
};

export default Weathercurrent;