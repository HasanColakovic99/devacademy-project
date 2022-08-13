import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 20px;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        row-gap: 48px;
        column-gap: 24px;
    }
`;

export const Main = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        width: 510px;
    }
`;

export const Input = styled.input`
    border: 1px solid #CACACA;
    border-radius: 4px;
    height: 55px;
    padding: 0px 12px;
    margin-bottom: 20px;

    ::-webkit-datetime-edit { 
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.15px;
        color: #909090;
    }

    &::-webkit-calendar-picker-indicator {
        display: none;
    }

    &::placeholder {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.15px;
        color: #909090;
    }

    &:focus {
        outline: none;
        border: 1px solid #EF976B;
    }
`;