
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) {
        return <Shimmer />;
    }

   // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[2]?.card?.card?.info.name}</h1>
            <p className="font-bold text-lg">{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")} - {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={index}
                    data={category?.card?.card}
                    showItems={showIndex === index}
                    toggleShowItems={() => setShowIndex(showIndex === index ? null : index)} // Toggle showItems state
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;