import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
    margin-bottom: 188px;

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-top: 45px;
        margin-bottom: 360px;
        gap: 130px;
    }
`;

export const BookingDetailsWrapper = styled.div`
    border: 1px solid #E3E3E3;
    border-radius: 8px;
    
    @media (min-width: 1024px) {
        width: 620px;
        height: 245px;
    }
`;

export const BookingDetailsInner = styled.div`
    display: flex;
    gap: 13px;
    padding: 16px;
`;

export const Image = styled.img`
    width: 40%;

    @media (min-width: 1024px) {
        height: 212px;
    }
`;

export const AccommodationData = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AccommodationName = styled.p`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.15px;

    @media screen {
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
    }
`;

export const Stars = styled.div`
    margin-top: 10px;
    margin-bottom: 14px;

    @media (min-width: 1024px) {
        margin-bottom: 23px;
    }
`;

export const Star = styled.img`
    width: 20px;
    height: 19px;
    margin-right: 4px;
`;

export const Data = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.15px;
    color: #1A3440;
    margin-bottom: 4px;

    :last-child{
        margin-bottom: 0;
    }

    @media (min-width: 1024px) {
        margin-bottom: 10px;
        font-size: 16px;
    }
`;

export const Dates = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const ButtonWrapper = styled.div``;

