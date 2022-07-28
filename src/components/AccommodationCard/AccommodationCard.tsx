import {CardWrapper, Figure, Image, Title, Location, Price, Star} from './AccommodationCardStyle';
import StarImage from '../../assets/star.png';
import getStars from '../../helper/GetStars';

interface Data {
    imgSrc: string;
    title: string;
    location: string;
    price: number;
    categorization: number;
}

const AccommodationCard: React.FC<Data> = (props) => {
    return (
        <CardWrapper>
            <Figure>
                <Image src={props.imgSrc}/>
            </Figure>
            <Title>{props.title}</Title>
            <Location>{props.location}</Location>
            <Price>EUR {props.price}</Price>
            {getStars(props.categorization).map((i) => ( 
                <Star key={i} src={StarImage}/>
            ))}
        </CardWrapper>
    );
}

export default AccommodationCard;