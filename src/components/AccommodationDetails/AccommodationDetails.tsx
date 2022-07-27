import {AccommodationDetailsWrapper, AccommodationDetailsInner, Image, RightContent, HotelData, HotelName, Stars, Star, Subtitle, CancelationDetails, Cancelation, Calendar, Description, LeftContent, PropertyInfo, LeftContentInner, Text} from './AccommodationDetailsStyle';
import BackgroundImage from '../../assets/accommodationdetails.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import StarImage from '../../assets/star.png';
import accommodationDetailsMock from '../../lib/mock/accommodationdetails';

const AccommodationDetails = () => {
    return (
        <>
            <Navigation />
            <AccommodationDetailsWrapper>
                <Image src={BackgroundImage} />

                {accommodationDetailsMock.map((accommodation, index) => (
                <AccommodationDetailsInner>
                    <LeftContent>
                        <HotelData>
                            <HotelName>{accommodation.title}</HotelName>
                            <Stars>
                                {[...Array(accommodation.categorization)].map((index) => ( 
                                    <Star key={index} src={StarImage}/>
                                ))}
                            </Stars>
                        </HotelData>
                        <Subtitle>{accommodation.subtitle}</Subtitle>
                        <CancelationDetails>
                            <Calendar />
                            <Cancelation>{accommodation.freeCancelation ? "Free cancellation available" : "Free cancellation is not available"}</Cancelation>
                        </CancelationDetails>
                        <Description>{accommodation.description}</Description>
                    </LeftContent>

                    <RightContent>
                        <PropertyInfo>Property info</PropertyInfo>
                        <LeftContentInner>
                            <Text>{accommodation.personCount} guests</Text>
                            <Text>{accommodation.type}</Text>
                            <Text>EUR {accommodation.price} per night</Text>
                            <Text>{accommodation.location}</Text>
                            <Text>{accommodation.postalCode}</Text>
                        </LeftContentInner>
                        <Button text="Book your stay"/>
                    </RightContent>
                </AccommodationDetailsInner>
                ))} 

            </AccommodationDetailsWrapper>
            <Footer />
        </>
    );
}

export default AccommodationDetails;