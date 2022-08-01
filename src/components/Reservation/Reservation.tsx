import {Form, Input} from '../../lib/style/GeneralStyles';
import Button from '../Button/Button';
import Section from '../Section/Section';
import {Dates} from './ReservationStyle';

const Reservation = () => {
    return (
        <Form>
            <Section title="Book your stay">
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
            </Section>
        </Form>
    );
}

export default Reservation;