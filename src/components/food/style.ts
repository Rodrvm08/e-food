import styled from "styled-components";
import { cores } from "../../globalStyle";

export const ContainerFood = styled.div`
    max-width: 320px;
    width: 100%;
    background-color: ${cores.laranja};

    div{
        padding: 8px;
    }
`

export const ImagemFood = styled.img`
    display: block;
    margin: 0 auto;
    padding-top: 8px;
`

export const TitleFood = styled.h4`
    font-size: 16px;
    font-weight: 900;
    padding-bottom: 8px;
`

export const DescriptionFood = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    padding-bottom: 8px;
`

export const Botao = styled.div`
    background-color: ${cores.bege};
    color: ${cores.laranja};
    font-size: 14px;
    padding: 4px 84px;
    max-width: 304px;
    width: 100%;
    display: block;
    margin: 0 auto;
`