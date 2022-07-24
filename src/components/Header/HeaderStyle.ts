import styled from 'styled-components';

export const Header = styled.header`
    position: absolute;
    top: 8%;
`;

export const BackgroundImage = styled.img`
    width: 100%;
    height: 274px;

    @media (min-width: 1024px) {
        height: 510px;
        object-fit: cover;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #9C9C9C 0.88%, rgba(217, 217, 217, 0) 100.83%);
    opacity: 0.7;
    filter: blur(10px);
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    margin-top: 23px;
    margin-left: 20px;

    @media (min-width: 1024px) {
        margin-top: 75px;
        margin-left: 90px;
    }
`;

export const Titleh1 = styled.h1`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    margin-bottom: 4px;

    @media (min-width: 1024px) {
        font-size: 96px;
        line-height: 115px;
        margin-bottom: 17px;
    }
`;

export const Titleh3 = styled.h3`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
    color: #FFFFFF;

    @media (min-width: 1024px) {
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 18px;
    }

`;

export const Subtitle = styled.p`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #1A3440;

    @media (min-width: 1024px) {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
    }
`;