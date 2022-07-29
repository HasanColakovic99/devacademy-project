import styled from 'styled-components';

export const Section = styled.section`
    margin-top: 40px;
    padding: 0px 19px;

    @media (min-width: 1024px) {
        margin-top: 32px;
        padding: 0px 90px;
    }
`;

export const SectionInner = styled.div``;

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* margin-bottom: 8px; */

    @media (min-width: 1024px) {

    }
`;

export const Title = styled.h4`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 41px;
    letter-spacing: 0.25px;
    color: #000000;
    
    @media (min-width: 1024px) {
        font-size: 34px;
        /* margin-bottom: 16px; */
    }
`;

export const Subtitle = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #7C7C7C;
`;

