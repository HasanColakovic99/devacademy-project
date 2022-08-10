import {Form, Input} from '../../lib/style/GeneralStyles';
import {Dates} from './ReservationStyle';
import Button from '../Button/Button';

const ReservationForm = () => {
    return (
        <Form>
            <Input type="text" placeholder="Full Name"/>
            <Input type="text" placeholder="Email address"/>
            <Input type="number" placeholder="Number of guests"/>
            <Dates>
                <Input type="date" placeholder="Check in"/>
                <Input type="date" placeholder="Check out" />
            </Dates>
            <Button text="Book your stay"/>
        </Form>
    );
}

export default ReservationForm;