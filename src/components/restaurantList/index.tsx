import Restaurant from "../restaurant";
import { List } from "./style";

import type { Restaurants } from "../../pages/home";

type Props = {
    restaurants: Restaurants[]
}

const getRestaurantTags = (restaurant: Restaurants) => {
    const tags = [];
    if (restaurant.destacado) {
        tags.push('Destaque da semana');
    }
    if (restaurant.tipo) {
        tags.push(restaurant.tipo);
    }
    return tags;
}

const RestaurantList = ( {restaurants} : Props) => {
    return (
        <div className="container2">
            <List>
                {restaurants.map(restaurants => (
                    <Restaurant 
                        key={restaurants.id}
                        id={restaurants.id}
                        classification={restaurants.avaliacao}
                        description={restaurants.descricao}
                        image={restaurants.capa}
                        infos={getRestaurantTags(restaurants)}
                        title={restaurants.titulo}
                    />
                ))}
            </List>
        </div>
    )
}

export default RestaurantList

