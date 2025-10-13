import styled from "styled-components";
import { cores } from "../../globalStyle";

export const ContainerRest = styled.div`
    width: 472px;
    height: auto;
    border: 1px solid ${cores.laranja};
    background-color: ${cores.branco};
    color: ${cores.laranja};
    margin-bottom: 48px;
    position: relative;

    img{
        width: 100%;
        height: 217px;
        object-fit: cover;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3{
            margin-top: 8px;
            margin-left: 8px;
            margin-bottom: 16px;
        }

        span{
            font-weight: bold;
            margin-top: 8px;
            margin-bottom: 16px;
        }
        
        img{
            width: 15px;
            height: 15px;
            margin: 0 8px
        }
    }
`


export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    max-width: 370px;
    margin-left: 8px;
    margin-bottom: 16px;
`

export const Infos = styled.div`
    display: flex;
    position: absolute;
    text-align: center;
    top: 16px;
    right: 16px;
`