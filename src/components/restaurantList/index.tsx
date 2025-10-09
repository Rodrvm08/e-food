import { List } from "./style";
import Restaurant from "../restaurant";

import sushi from '../../assets/sushi.png'
import massas from '../../assets/macarao.png'

const RestaurantList = () => (
    <div className="container2">
        <List>
        <Restaurant 
            classification="4.9"
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            image={sushi}
            infos={['Destaque da semana', 'Japonesa']}
            title="Hioki Sushi"
        />
        <Restaurant 
            classification="4.1"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={massas}
            infos={['Italiana']}
            title="La Dolce Vita Trattoria"
        />
        <Restaurant 
            classification="4.1"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={massas}
            infos={['Italiana']}
            title="La Dolce Vita Trattoria"
        />
        <Restaurant 
            classification="4.1"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={massas}
            infos={['Italiana']}
            title="La Dolce Vita Trattoria"
        />
        <Restaurant 
            classification="4.2"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={massas}
            infos={['Italiana']}
            title="La Dolce Vita Trattoria"
        />
        <Restaurant 
            classification="4.2"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={massas}
            infos={['Italiana']}
            title="La Dolce Vita Trattoria"
        />
    </List>
    </div>
)

export default RestaurantList

