import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, toggleShowItems }) => {
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={toggleShowItems}>
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span> {/* Change arrow direction based on showItems state */}
                </div>

                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
