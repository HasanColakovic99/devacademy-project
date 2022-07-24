import {Button as ButtonWrapper} from './ButtonStyle';
import rightIcon from '../../assets/arrow.png';

const Button = () => {
    return (

        <ButtonWrapper>
            <button>button</button>
            <img src={rightIcon}/>
        </ButtonWrapper>
    );
}

export default Button;