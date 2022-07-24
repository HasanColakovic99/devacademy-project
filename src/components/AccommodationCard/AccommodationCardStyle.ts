import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Figure = styled.figure`
    width: 100%;
    height: 158px;
    border-radius: 8px;
    margin-bottom: 9px;
    transition: all 0.3s;

    @media (min-width: 1024px) {
        height: 266px;
        border-radius: 12px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-out;
`;

export const Title = styled.h3`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.25px;
    color: #000000;
`;

export const Location = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: #ADADAD;
`;

export const Price = styled.span`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: #1A3440;
`;