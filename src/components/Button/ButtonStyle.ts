import styled from 'styled-components';
import {FaArrowRight as rightArrowIcon} from 'react-icons/fa';
import {FaArrowLeft as leftArrowIcon} from 'react-icons/fa';

export const Button = styled.button<{variant: string; rightIcon: boolean, leftIcon: boolean}>`
    background: #40E0D0;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    border: none;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.46px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 8px 22px;

    &:active {
        transform: scale(0.98);
    }

    ${({variant}) => variant === 'isPrimary' && `
    
        &:hover {
            background: #1DB4A5;
        }
    `};

    ${({variant}) => variant === 'isSecondary' && `
        color: #40E0D0;
        padding: 0;
        box-shadow: none;
        background: #FFFFFF;

        &:hover {
            color: #1DB4A5;
        }
    `};

    ${({variant}) => variant === 'isTernary' && `
        color: #EF6B6B;;
        padding: 0;
        box-shadow: none;
        background: #FFFFFF;

        &:hover {
            color: #BF5555;
        }
    `};

    ${({rightIcon}) => rightIcon && `
        display: flex;
        align-items: center;
        gap: 12px;
    `};

    ${({leftIcon}) => leftIcon && `
        display: flex;
        align-items: center;
        gap: 12px;
    `};
`;

export const RightArrow = styled(rightArrowIcon)`
    width: 18px;
    height: 18px;
    display: none;
    
    @media (min-width: 1024px) {
        display: block;
    }
`;

export const LeftArrow = styled(leftArrowIcon)`
    width: 18px;
    height: 18px;
    display: none;
    
    @media (min-width: 1024px) {
        display: block;
    }
`;
