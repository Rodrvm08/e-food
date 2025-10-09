import styled from "styled-components";
import { cores } from "../../globalStyle";

export const ContainerRest = styled.div`
    width: 472px;
    width: 100%;
    height: auto;
    border: 1px solid ${cores.laranja};
    background-color: ${cores.branco};
    color: ${cores.laranja};
    margin-bottom: 48px;
    position: relative;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3{
            margin-left: 8px;
            margin-bottom: 16px;
        }

        span{
            font-weight: bold;
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
    top: 16px;
    right: 16px;
`