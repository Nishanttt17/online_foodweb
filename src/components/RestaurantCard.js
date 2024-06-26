import { CDN_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    }=resData?.info;
    // Construct the complete Cloudinary image URL
    const imageUrl =`${CDN_URL}${cloudinaryImageId}`
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={imageUrl}
            />
            <h3 className="font-bold py-4 text-l">{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating}stars</h4>
              <h4>{costForTwo}</h4>
        </div>
    );
};
export default RestaurantCard;