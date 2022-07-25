import {CardWrapper, Figure, Image, Title, Location, Price, Star} from './AccommodationCardStyle';
import StarImage from '../../assets/star.png';

interface Data {
    imgSrc: string;
    title: string;
    location: string;
    price: number;
    categorization: number;
}

const AccommodationCard: React.FC<Data> = ({imgSrc, title, location, price, categorization}) => {
    return (
        <CardWrapper>
            <Figure>
                <Image src={imgSrc}/>
            </Figure>
            <Title>{title}</Title>
            <Location>{location}</Location>
            <Price>EUR {price}</Price>
            {[...Array(categorization)].map((index) => ( 
                <Star key={index} src={StarImage}/>
            ))}
        </CardWrapper>
    );
}

export default AccommodationCard;