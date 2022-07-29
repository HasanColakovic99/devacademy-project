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