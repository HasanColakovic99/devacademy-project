import styled from 'styled-components';

export const ButtonContent = styled.div``;

export const Button = styled.button<{ variant: string }>`
    border-radius: 4px;
    border: none;
    background: #40E0D0;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.46px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 8px 22px;

    ${({ variant }) => variant === 'isSecondary' && `
        background: none;
        box-shadow: none;
        color: #40E0D0;

        &:hover {
            color: #1DB4A5;
        }
    `};
`;

export const Image = styled.img`
    width: 16px;
    height: 16px;
`;