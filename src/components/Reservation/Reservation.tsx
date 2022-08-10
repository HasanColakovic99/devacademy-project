import Section from '../Section/Section';
import ReservationCard from './ReservationCard';
import ReservationForm from './ReservationForm';
import {Wrapper} from './ReservationStyle';

const Reservation = () => {
    return (
        <Section title="Book your stay">
            <Wrapper>
                <ReservationCard />
                <ReservationForm />
            </Wrapper>
        </Section>
    );
}

export default Reservation;