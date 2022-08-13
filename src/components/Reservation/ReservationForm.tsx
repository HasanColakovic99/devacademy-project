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
                <Input 
                    type="text" 
                    onFocus={(e) => (e.target.type = "date")}  
                    onBlur={(e) => (e.target.type = "text")}  
                    placeholder="Check in"
                />
                <Input 
                    type="text" 
                    placeholder="Check out" 
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                />
            </Dates>
            <Button text="Book your stay"/>
        </Form>
    );
}

export default ReservationForm;