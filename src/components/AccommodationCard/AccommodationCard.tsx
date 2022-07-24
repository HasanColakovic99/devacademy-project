import {CardWrapper, Figure, Image, Title, Location, Price} from './AccommodationCardStyle';
import CardImage from '../../assets/card.png';

interface Data {
    title: string;
    location: string;
    price: string;
}

const AccommodationCard: React.FC<Data> = ({title, location, price}) => {
    return (
        <CardWrapper>
            <Figure>
                <Image src={CardImage}/>
            </Figure>
            <Title>{title}</Title>
            <Location>{location}</Location>
            <Price>{price}</Price>
        </CardWrapper>
    );
}

export default AccommodationCard;