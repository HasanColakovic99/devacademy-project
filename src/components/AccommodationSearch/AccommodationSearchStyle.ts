import styled from "styled-components";

export const AccommodationSearchWrapper = styled.div`
    width: 100%;
    height: 150px;
    box-shadow: 0px 4px 4px rgba(205, 205, 205, 0.25);
    border-radius: 20px;
`;

export const AccommodationSearchInner = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    gap: 20px;
`;

export const Select = styled.select`
    border: none;

    &:focus {
        outline: none;
    }
`;

export const Option = styled.option`
`;

export const Fieldset = styled.fieldset`
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #CACACA;
    border-radius: 4px;
    height: 45px;

    &:focus-within {
        border: 1px solid #EF976B;
    }
`;

export const Legend = styled.legend`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.15px;
    color: #909090;

`;

export const Icon = styled.img``;

export const Input = styled.input`
    border: 1px solid #CACACA;
    border-radius: 4px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #909090;
    border: none;

    &:focus {
        outline: none;
    }
`;