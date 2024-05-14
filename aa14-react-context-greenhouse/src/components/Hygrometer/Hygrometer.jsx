import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function Hygrometer() {
  const {humidity, setHumidity} = useClimate();
  const [desireHumidity, setDesireHumidity] = useState(40);

  useEffect(() => {
    setTimeout(() => {
      if (humidity < desireHumidity) {
        setHumidity((current) => current + 2)
      }

      if (humidity > desireHumidity) {
        setHumidity((current) => current - 2)
      }
    }, 1000)
  }, [desireHumidity, humidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={desireHumidity}
        onAfterChange={(val) => {setDesireHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
