import styled from 'styled-components';

export const CardWrapper = styled.div`
    margin-top: 38px;
    width: 100%;
    &:hover {
        figure {
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }

        img {
            transform: scale(1.05);
        }
    }
`;

export const Figure = styled.figure`
    width: 100%;
    height: 266px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 20px;
    transition: all 0.3s;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-out;
`;

export const Star = styled.img`
    width: 20px;
    height: 19px;
    margin-right: 6px;
`;

export const Title = styled.h3`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.25px;
    color: #000000;
    margin-bottom: 10px;
`;

export const Location = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: #ADADAD;
    margin-bottom: 20px;
`;

export const Price = styled.p`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: #1A3440;
    margin-bottom: 23px;
`;