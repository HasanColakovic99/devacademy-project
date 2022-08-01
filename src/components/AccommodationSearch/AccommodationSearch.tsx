import Button from '../Button/Button';
import {AccommodationSearchWrapper, AccommodationSearchInner, Select, Option, Fieldset, Legend, Input, Icon} from './AccommodationSearchStyle';
import input from '../../assets/car.png';

interface Data {
    legend: string;
    type: string;
}

const AccommodationSearch: React.FC<Data> = (props) => {
    return (
        <AccommodationSearchWrapper>
            <AccommodationSearchInner>
                <Fieldset>
                    <Legend>{props.legend}</Legend>
                    <Icon src={input} />
                    <Select>
                        <Option value="0"></Option>
                        <Option>Hasan</Option>
                        <Option>Husein</Option>
                        <Option>Sulejman</Option>
                    </Select>
                </Fieldset>
                <Button text="Search"/>
            </AccommodationSearchInner>
        </AccommodationSearchWrapper>
    );
}

export default AccommodationSearch;