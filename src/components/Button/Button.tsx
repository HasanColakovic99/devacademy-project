import {Button as ButtonWrapper, RightArrow, LeftArrow} from './ButtonStyle';

interface Props {
    text: string;
    variant?: string;
    rightIcon?: boolean;
    leftIcon?: boolean;
}

const Button: React.FC<Props> = (props) => {
    return (
        <ButtonWrapper 
            variant={props.variant ? props.variant : 'isPrimary'} 
            rightIcon={props.rightIcon ? props.rightIcon : false} 
            leftIcon={props.leftIcon ? props.leftIcon : false}
        >
            {props.leftIcon && <LeftArrow />}
            {props.text}
            {props.rightIcon && <RightArrow />}
        </ButtonWrapper>
    );
}

export default Button;