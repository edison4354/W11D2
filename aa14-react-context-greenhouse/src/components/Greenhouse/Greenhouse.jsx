import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useTheme } from '../../context/ThemeContext';

function Greenhouse() {
  const { themeName } = useTheme();
  let image;
  if (themeName === 'day') {
    image = dayImage;
  } else {
    image = nightImage;
  }

  return (
    <section>
      <img  className='greenhouse-img'
            src={image}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
