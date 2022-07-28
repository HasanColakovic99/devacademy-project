import {Header as HeaderWrapper, BackgroundImage, Overlay, Content, Titleh1, Titleh3, Subtitle} from './HeaderStyle';
import Image from '../../assets/landing.jpg';

const Header = () => {
    return (
        <HeaderWrapper>
            <BackgroundImage src={Image} alt="Landing image"/>
            <Overlay />
            <Content>
                <Titleh1>Enjoy your travels</Titleh1>
                <Titleh3>with Staycation and collect rewards</Titleh3>
                <Subtitle>Book now and save 10% more today</Subtitle>
            </Content>
        </HeaderWrapper>
    );
}

export default Header;