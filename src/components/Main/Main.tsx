import { useState } from "react";
import { Grid, Main } from "../../lib/style/GeneralStyles";
import {MainWrapper} from './MainStyle';
import accommodationsMock from "../../lib/mock/accommodations";
import AccommodationCard from "../AccommodationCard/AccommodationCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Section from "../Section/Section";

const MainPage = () => {

    const [accommodations, setAccommodations] = useState(accommodationsMock);

    return (
        <MainWrapper>
            <Navigation />
            <Header />
            <Main>
                <Section title="Home guests love" btnText="view all homes">
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
            <Footer />
        </MainWrapper>
    );
}

export default MainPage;