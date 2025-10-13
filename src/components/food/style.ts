// styleFoodlist.ts
import styled from "styled-components";
import { cores } from "../../globalStyle";

export const ContainerFood = styled.div`
    max-width: 320px;
    width: 100%;
    background-color: ${cores.laranja};
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    div {
        padding: 12px 8px;
    }
`;

export const ImagemFood = styled.img`
    display: block;
    width: 100%;
    height: 180px; // Altura reduzida
    object-fit: cover;
    padding: 0; // Remove o padding se estiver muito grande
`;

export const TitleFood = styled.h4`
    font-size: 16px;
    font-weight: 900;
    padding-bottom: 8px;
    color: ${cores.branco};
    margin: 0;
    line-height: 1.2;
`;

export const DescriptionFood = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    padding-bottom: 12px;
    color: ${cores.branco};
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 72px;
`;

export const Botao = styled.div`
    background-color: ${cores.bege};
    color: ${cores.laranja};
    font-size: 14px;
    font-weight: 700;
    padding: 8px 12px;
    width: 100%;
    text-align: center;
    border-radius: 4px;
    transition: all 0.2s ease;
    cursor: pointer;
    margin-top: 8px;
`;