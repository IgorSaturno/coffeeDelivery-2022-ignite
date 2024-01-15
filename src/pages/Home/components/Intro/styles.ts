import styled from "styled-components";
import introBackgroundImg from "../../../../assets/Background.svg"
import { rgba } from "polished"
import { TitleText } from "../../../../components/typography";
import { device } from "../../../../styles/theme/default";

export const IntroContainer = styled.section`
    width: 100%;
    /* height: 34rem; */
    background: ${({theme}) => `url(${introBackgroundImg}) no-repeat center,
    linear-gradient(
        8deg,
        ${theme.colors["base-white"]} 8%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%

    )`};
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 3.5rem;
    @media (max-width: 768px) {
        img {
            display: none;
        }
    }
    @media (max-width: 1120px) {
        flex-wrap: wrap;  
        /* img {
            display: none;
        }  */
    }
`;

export const IntroTitle = styled(TitleText)`
    margin-bottom: 1rem;
    @media (max-width: 768px) {
            font-size: 1.70rem;
        }

        
`;

export const BenefitsContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
row-gap: 1.25rem;
margin-top: 4.125rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
        padding: 0.5rem;
    }
`