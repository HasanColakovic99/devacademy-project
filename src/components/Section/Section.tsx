import {Section as SectionWrapper, SectionInner, Heading, Title, Subtitle} from './SectionStyle';
import Button from '../Button/Button';

interface Props {
    title: string;
    btnText?: string;
    subtitle?: string;
    children?: any;
}

const Section: React.FC<Props> = ({title, btnText, subtitle, children}) => {
    return (
        <SectionWrapper>
            <SectionInner>
                <Heading>
                    <Title>{title}</Title>
                    {btnText && <Button text={btnText} variant='isSecondary' rightIcon/>}
                </Heading>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {children}
            </SectionInner>
        </SectionWrapper>
    );
}

export default Section;