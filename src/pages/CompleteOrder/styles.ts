import styled from "styled-components";
import { device } from "../../styles/theme/default";

export const CompleteOrderContainer = styled.form`
margin-top: 2.5rem;
display: flex;
justify-content: space-between;
gap: 2rem;
@media (max-width: 768px) {
        flex-direction: column;
        font-size: 87%;
    } 
`

export const SectionBaseStyle = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`
