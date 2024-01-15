import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
    width: 100%;
    margin-top: 2rem;
`

export const CoffeeList = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;
`