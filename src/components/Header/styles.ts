import styled, { css } from "styled-components";
import { device } from "../../styles/theme/default";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${(props) => props.theme.colors["base-background"]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    @media ${device.mobileS} { 
        height: 4.5rem;
    }

    @media ${device.mobileM} { 
        height: 4.5rem;
    }

    @media ${device.mobileL} { 
        height: 4.5rem;
    }

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        @media (max-width: 290px){
            flex-direction: column;
            padding: 0 1rem;
        }

        @media ${device.mobileS}{
            /* flex-direction: column; */
            padding: 0 1rem;
        }
    }

`;

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

interface HeaderButtonProps {
    variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding:  0 0.5rem;
    position: relative;
    font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
    cursor: inherit;

    span {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: calc(-1.25rem / 2);
        right: calc(-1.25rem / 2);
        color: ${(props) => props.theme.colors[`base-white`]};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;

    }

    ${({variant, theme}) => css`
        background: ${(props) => props.theme.colors[`brand-${variant}-light`]};
        color: ${(props) => props.theme.colors[`brand-${variant}-dark`]};

        span {
            background: ${theme.colors[`brand-${variant}-dark`]}
        }
    `}

    ${({variant}) => variant === "purple" && css`
        svg {
            color: ${(props) => props.theme.colors[`brand-purple`]};
        }
    `}
    
`;