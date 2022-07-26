import {CityCard as CityCardWrapper, Overlay, Content, CityName, Properties, Image} from './CityCardStyle';

interface Data {
    imgSrc: string;
    cityName: string;
    properties: number;
}

const CityCard: React.FC<Data> = ({imgSrc, cityName, properties}) => {
    return (
        <CityCardWrapper>
            <Image src={imgSrc}/>
            <Overlay />
            <Content>
                <CityName>{cityName}</CityName>
                <Properties>{properties} properties</Properties>
            </Content>
        </CityCardWrapper>
    );
}

export default CityCard;