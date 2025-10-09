import { ContainerFood, TitleFood, DescriptionFood, ImagemFood, Botao } from "./style";

import pizza from "../../assets/margerita.png"

const Food = () => (
    <ContainerFood>
        <ImagemFood src={pizza} alt="Pizza" />
        <div>
            <TitleFood>Pizza Marguerita</TitleFood>
            <DescriptionFood>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</DescriptionFood>
            <Botao>Adicionar ao carrinho</Botao>
        </div>
    </ContainerFood>
)

export default Food