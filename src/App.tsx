import './App.css';
import Header from './components/Header/Header';
import Navigation  from './components/Navigation/Navigation';
import Button from './components/Button/Button';
import AccommodationCard from './components/AccommodationCard/AccommodationCard';
import { Grid } from './lib/GeneralStyles';

function App() {
  return (
    <>
      {/* <Navigation />
      <Header /> */}
      <Button text={'button'} variant='isSecondary' rightIcon={true}/>
    </>
  );
}

export default App;
