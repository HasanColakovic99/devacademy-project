import styled from "styled-components";

export const CityCard = styled.div`
    position: relative;
    width: 100%;
    height: 155px;
    
    @media (min-width: 1024px) {
        height: 295px;
        margin-top: 41px;
        margin-bottom: 85px;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 8px;

    @media (min-width: 1024px) {
        border-radius: 12px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;

    @media (min-width: 1024px) {
        border-radius: 12px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px 8px;

    @media (min-width: 1024px) {
        padding: 20px 10px;
    }
`;

export const CityName = styled.p`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(205, 205, 205, 0.25);

    @media (min-width: 1024px) {
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.25px;
        margin-bottom: 8px;
    }
`;

export const Properties = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.15px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(205, 205, 205, 0.25);

    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.25px;
    }
`;