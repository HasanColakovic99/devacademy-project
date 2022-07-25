import {Button as ButtonWrapper, Image} from './ButtonStyle';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';

interface Props {
    text: string;
    variant: string;
    rightIcon: boolean;
    leftIcon: boolean;
}

const Button: React.FC<Props> = ({text, variant, rightIcon, leftIcon}) => {
    return (
        <ButtonWrapper variant={variant} rightIcon={rightIcon} leftIcon={leftIcon}>
            {leftIcon && <Image src={leftArrow}/>}
            {text}
            {rightIcon && <Image src={rightArrow}/>}
        </ButtonWrapper>
    );
}

export default Button;