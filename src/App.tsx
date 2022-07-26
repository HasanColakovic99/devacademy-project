import { useState } from 'react';
import './App.css';
import CityCard from './components/CityCard/CityCard';
import MainPage from './components/Main/Main';
import Section from './components/Section/Section';
import cityCardsMock from './lib/mock/citycards';
import { Grid, Main } from './lib/style/GeneralStyles';

function App() {

  const [citycards, setCityCard] = useState(cityCardsMock);

  return (
    <>
      {/* <MainPage /> */}
      <Section title="All locations">
          <Grid>
            {citycards.map((citycard, index) => (
              <CityCard
                key={index} 
                imgSrc={citycard.imgSrc}
                cityName={citycard.name}
                properties={citycard.count}
              />
            ))}
          </Grid>
        </Section>
    </>
  );
}

export default App;
