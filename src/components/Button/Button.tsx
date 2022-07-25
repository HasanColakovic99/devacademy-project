import {Button as ButtonWrapper, Image} from './ButtonStyle';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';

interface Props {
    text: string;
    variant: string;
    rightIcon?: boolean;
    leftIcon?: boolean;
}

const Button: React.FC<Props> = ({text, variant, rightIcon, leftIcon}) => {
    return (
        <ButtonWrapper 
            variant={variant} 
            rightIcon={rightIcon ? rightIcon : false} 
            leftIcon={leftIcon ? leftIcon : false}
        >
            {leftIcon && <Image src={leftArrow}/>}
            {text}
            {rightIcon && <Image src={rightArrow}/>}
        </ButtonWrapper>
    );
}

export default Button;