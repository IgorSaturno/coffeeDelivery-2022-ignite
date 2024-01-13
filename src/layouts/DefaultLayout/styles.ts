import styled from "styled-components"
import { device } from "../../styles/theme/default";

export const LayoutContainer = styled.div`
    .container {
        max-width: 70rem;
        margin-right: auto;
        margin-left: auto;

        @media (max-width: 768px) {
          max-width: 22rem;
        } 
    }
`;