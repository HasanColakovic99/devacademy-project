import styled from "styled-components";

export const Footer = styled.footer`
    width: 100vw;
`;

export const FooterInner = styled.div`
    padding: 24px 20px;
    background: #1A3440;

    @media (min-width: 1024px) {
        padding: 27px 90px;
    }
`;

export const FooterText = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #FFFFFF;

    @media (min-width: 1024px) {
        font-size: 24px;
        line-height: 32px;
    }
`;