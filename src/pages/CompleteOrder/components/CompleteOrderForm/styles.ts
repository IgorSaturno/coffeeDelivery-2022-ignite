import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";
import { device } from "../../../../styles/theme/default";

export const CompleteOrderFormContainer = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 0.75rem;
    width: 40rem;
`

export const FormSectionContainer = styled(SectionBaseStyle)`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const AddressFormContainer = styled.div`
width: 100%;
display:grid;
column-gap: 0.75rem;
grid-template-columns: 12.5rem 17.25rem 3.75rem;
row-gap: 1rem;
grid-auto-flow: dense;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        
    }

.cep {
    grid-column: span 2;
    max-width: 12.5rem;
}

.street {
  grid-column: span 3;
    @media (max-width: 768px) {
        max-width: 20rem;
    }
}

.number {
    
    @media (max-width: 768px) {
        grid-column: span 2;    
        max-width: 12.5rem;
    }
}

.complement {
    grid-column: span 2;
    @media (max-width: 768px) {
        max-width: 12.5rem;
    }
}

.neighborhood {
    
    @media (max-width: 768px) {
        grid-column: span 1;
    }
}

.city {
    @media (max-width: 768px) {
        grid-column: span 1;
    }
}

/* .uf {
    @media (max-width: 768px) {
        grid-column: span 4;
    }
} */
`

export const PaymnentMethodOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    > p {
        grid-column: span 3;
        color: ${(props) => props.theme.colors["base-error"]};
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
