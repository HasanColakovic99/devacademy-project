import {Section as SectionWrapper, SectionInner, Heading, Title, Subtitle} from './SectionStyle';
import Button from '../Button/Button';

interface Props {
    title: string;
    btnText?: string;
    subtitle?: string;
    children?: any;
}

const Section: React.FC<Props> = (props) => {
    return (
        <SectionWrapper>
            <SectionInner>
                <Heading>
                    <Title>{props.title}</Title>
                    {props.btnText && <Button text={props.btnText} variant='isSecondary' rightIcon/>}
                </Heading>
                {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
                {props.children}
            </SectionInner>
        </SectionWrapper>
    );
}

export default Section;