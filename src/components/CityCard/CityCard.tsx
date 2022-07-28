import {CityCard as CityCardWrapper, Overlay, Content, CityName, Properties, Image} from './CityCardStyle';

interface Data {
    imgSrc: string;
    cityName: string;
    properties: number;
}

const CityCard: React.FC<Data> = (props) => {
    return (
        <CityCardWrapper>
            <Image src={props.imgSrc}/>
            <Overlay />
            <Content>
                <CityName>{props.cityName}</CityName>
                <Properties>{props.properties} properties</Properties>
            </Content>
        </CityCardWrapper>
    );
}

export default CityCard;