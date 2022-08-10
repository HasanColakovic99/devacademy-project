import {BookingDetailsWrapper, BookingDetailsInner, Image, AccommodationData, AccommodationName, Stars, Star, Data} from './ReservationStyle';
import StarImage from '../../assets/star.png';
import AccommodationPicutre from '../../assets/book.png';
import {getStars} from '../../helper/helpers';
import accommodationDetailsMock from '../../lib/mock/accommodationdetails';

const ReservationCard = () => {
    return (
        <BookingDetailsWrapper>
            {accommodationDetailsMock.map((accommodation, index) => (
            <BookingDetailsInner key={index}>
                <Image src={AccommodationPicutre}/>
                <AccommodationData>
                    <AccommodationName>{accommodation.title}</AccommodationName>
                    <Stars>
                        {getStars(accommodation.categorization).map((i) => ( 
                            <Star key={i} src={StarImage}/>
                        ))}
                    </Stars>
                    <Data>{accommodation.type}</Data>
                    <Data>{accommodation.location}</Data>
                    <Data>{accommodation.postalCode}</Data>
                    <Data>EUR {accommodation.price} per night</Data>
                </AccommodationData>
            </BookingDetailsInner>
            ))}
        </BookingDetailsWrapper>
    );
}

export default ReservationCard;