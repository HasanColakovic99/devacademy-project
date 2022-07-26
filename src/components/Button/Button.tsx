import {Button as ButtonWrapper, RightArrow, LeftArrow} from './ButtonStyle';

interface Props {
    text: string;
    variant?: string;
    rightIcon?: boolean;
    leftIcon?: boolean;
}

const Button: React.FC<Props> = ({text, variant, rightIcon, leftIcon}) => {
    return (
        <ButtonWrapper 
            variant={variant ? variant : 'isPrimary'} 
            rightIcon={rightIcon ? rightIcon : false} 
            leftIcon={leftIcon ? leftIcon : false}
        >
            {leftIcon && <LeftArrow />}
            {text}
            {rightIcon && <RightArrow />}
        </ButtonWrapper>
    );
}

export default Button;