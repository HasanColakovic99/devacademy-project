import './App.css';
import Header from './components/Header/Header';
import Navigation  from './components/Navigation/Navigation';
import Button from './components/Button/Button';
import AccommodationCard from './components/AccommodationCard/AccommodationCard';
import { Grid, Main } from './lib/GeneralStyles';
import Section from './components/Section/Section';
import accommodationsMock from './lib/mock/accommodations';
import { useEffect, useState } from 'react';

function App() {

  const [accommodations, setAccommodations] = useState(accommodationsMock);

  return (
    <>
      {/* <Navigation />
      <Header /> */}
      <Main>
        <Section 
          title='Homes guests love' 
          btnText='view more' 
        >
          <Grid>
            {accommodations.map((accommodation, index) => (
              <AccommodationCard
                key={index}
                imgSrc={accommodation.imgSrc} 
                title={accommodation.title} 
                location={accommodation.location} 
                price={accommodation.price} 
                categorization={accommodation.categorization}/>
            ))}
          </Grid>
        </Section>
      </Main>
    </>
  );
}

export default App;
