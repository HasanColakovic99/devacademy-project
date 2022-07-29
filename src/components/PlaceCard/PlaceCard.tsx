import {CardWrapper, Figure, Image, Title, Location, Price} from '../AccommodationCard/AccommodationCardStyle';
import {Buttons} from './PlaceCardStyle';
import Button from '../Button/Button';

interface Data {
    imgSrc: string;
    title: string;
    location: string;
    subtitle: string;
}

const PlaceCard: React.FC<Data> = (props) => {
    return (
        <CardWrapper>
            <Figure>
                <Image src={props.imgSrc}/>
            </Figure>
            <Title>{props.title}</Title>
            <Location>{props.location}</Location>
            <Price>{props.subtitle}</Price>
            <Buttons>
                <Button text="Edit" variant="isSecondary"/>
                <Button text="Delete place" variant="isTernary"/>
            </Buttons>
        </CardWrapper>
    );
}

export default PlaceCard;