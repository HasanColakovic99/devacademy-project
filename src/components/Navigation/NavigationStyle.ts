import styled from 'styled-components';

export const Navigation = styled.nav`
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(205, 205, 205, 0.25);
`;

export const NavigationInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 76px;
`;

export const LogoText = styled.h6`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
    color: #000000;
`;

export const NavigationLinks = styled.div`
    display: none;

    @media (min-width: 1024px) {
        width: 335px;
        display: flex;
        justify-content: space-between;
    }
`;

export const Link = styled.a`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-decoration: underline;
    color: #1a3440;
`;

export const Logout = styled.p`
    font-family: 'Roboto';
    font-weight: 500px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: #1A3440;
`;