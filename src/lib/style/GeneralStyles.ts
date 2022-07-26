import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 24px;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 48px;
    }
`;

export const Main = styled.div`
    width: 100%;
    overflow: hidden;
`;