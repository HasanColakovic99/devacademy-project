import {Navigation as NavigationWrapper, NavigationInner, LogoText, NavigationLinks, Link, Logout} from './NavigationStyle';

const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationInner>
                <LogoText>Staycation</LogoText>
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