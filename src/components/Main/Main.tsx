import { Grid, Main } from "../../lib/style/GeneralStyles";
import {MainWrapper} from './MainStyle';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";
import CityCard from "../CityCard/CityCard";
import AccommodationCard from "../AccommodationCard/AccommodationCard";
import AccommodationDetails from "../AccommodationDetails/AccommodationDetails";
import accommodationsMock from "../../lib/mock/accommodations";
import cityCardsMock from "../../lib/mock/citycards";
import placeCardsMock from "../../lib/mock/placecards";
import PlaceCard from "../PlaceCard/PlaceCard";

const MainPage = () => {
    return (
        <MainWrapper>
            <Navigation />
            <Header />
            <Main>
                <Section title="All locations" btnText="view all locations">
                    <Grid>
                        {cityCardsMock.map((citycard, index) => (
                        <CityCard
                            key={index} 
                            imgSrc={citycard.imgSrc}
                            cityName={citycard.name}
                            properties={citycard.count}
                        />
                        ))}
                    </Grid>
                </Section>
                <Section title="My places" isSecondary>
                    <Grid>
                        {placeCardsMock.map((place, index) => (
                        <PlaceCard
                            key={index}
                            imgSrc={place.imgSrc} 
                            title={place.title} 
                            location={place.location}
                            subtitle={place.subtitle} 
                        />
                        ))}
                    </Grid>
                </Section>
                <Section title="Home guests love" btnText="view all homes">
                    <Grid>
                        {accommodationsMock.map((accommodation, index) => (
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
            <AccommodationDetails />
            <Footer />
        </MainWrapper>
    );
}

export default MainPage;