import {ButtonContent, Button as ButtonWrapper, Image} from './ButtonStyle';
import rightIcon from '../../assets/vector.jpg';

interface Props {
    variant: string;
    text: string;
}

const Button: React.FC<Props> = ({text, variant}) => {
    return (
        <ButtonWrapper variant={variant}>
            {text}
        </ButtonWrapper>
    );
}

export default Button;