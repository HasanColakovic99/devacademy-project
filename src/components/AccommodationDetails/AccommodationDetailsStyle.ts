import styled, { css } from "styled-components";
import {FaRegCalendar as CalendarIcon} from 'react-icons/fa';

export const TextStyle = css`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #1A3440;
    margin-bottom: 10px;
`;

export const AccommodationDetailsWrapper = styled.div`
    padding: 0px 20px;
    margin-top: 24px;
    margin-bottom: 44px;

    @media (min-width: 1024px) {        
        padding: 0px 90px;
        margin-top: 32px;
        margin-bottom: 100px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;

    @media (min-width: 1024px) {
        height: 100%;
    }
`;

export const AccommodationDetailsInner = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 32px;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 28px;
    }
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        width: 810px;
    }
`;

export const HotelData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        gap: 22px;
    }
`;

export const HotelName = styled.h4`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;

    @media (min-width: 1024px) {
        font-size: 34px;
        line-height: 41px;
        letter-spacing: 0.25px;
    }
`;

export const Stars = styled.div``;

export const Star = styled.img`
    width: 20px;
    height: 19px;
    margin-right: 6px;
`;

export const Subtitle = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #7C7C7C;
    margin-top: 12px;
    margin-bottom: 16px;

    @media (min-width: 1024px) {
        margin-bottom: 40px;
    }
`;

export const CancelationDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
    margin-bottom: 26px;

    @media (min-width: 1024px) {
        margin-bottom: 40px;
    }
`;

export const Cancelation = styled.p`
    ${TextStyle};
    font-weight: 600;
    margin-bottom: 0;
`;

export const Calendar = styled(CalendarIcon)`
    color: #EF976B;
    width: 24px;
    height: 26px;
`;

export const Description = styled.p`
    ${TextStyle};
    margin-bottom: 0;
    text-align: justify;
`;

export const RightContent = styled.div`
    background: #F2FDFC;
    box-shadow: 0px 4px 4px rgba(205, 205, 205, 0.25);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 1024px) {
        padding: 24px;
        width: 300px;
    }
`;

export const LeftContentInner = styled.div`
    margin-bottom: 36px;
`;

export const PropertyInfo = styled.h6`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
    margin-bottom: 16px;
`;

export const Text = styled.p`
    ${TextStyle}
`;
