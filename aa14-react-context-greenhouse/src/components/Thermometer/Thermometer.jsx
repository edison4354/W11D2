import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function Thermometer() {

  const {temperature, setTemperature} = useClimate();
  const [desireTemperature, setDesireTemperature] = useState(50);

  useEffect(() => {
    setTimeout(() => {
        if (temperature < desireTemperature) {
            setTemperature((current) => current + 1)
        }

        if (temperature > desireTemperature) {
            setTemperature((current) => current - 1)
        }
    }, 1000)
  }, [desireTemperature, temperature]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={desireTemperature}
        onAfterChange={(val) => {setDesireTemperature(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
