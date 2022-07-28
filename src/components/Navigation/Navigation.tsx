import {Navigation as NavigationWrapper, NavigationInner, Content, Hamburger, LogoText, NavigationLinks, Link, Logout} from './NavigationStyle';

const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationInner>
                <Content>
                    <Hamburger />
                    <LogoText>Staycation</LogoText>
                </Content>
                <NavigationLinks>
                    <Link>Locations</Link>
                    <Link>My places</Link>
                    <Link>My bookings</Link>
                </NavigationLinks>
                <Logout>Logout</Logout>
            </NavigationInner>
        </NavigationWrapper>
    );
}

export default Navigation;