import styled from "styled-components";
import { cores } from "../../globalStyle";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    gap: 32px;
    padding-top: 56px;
    color: ${cores.bege};
    padding-bottom: 120px;
`