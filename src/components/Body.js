import RestaurantCard from "./RestaurantCard";
import resObj  from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
    const [ListOfRestaurants,setListOfRestaurant]=useState([]);
    const[filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("");
    //whenever state variables are updated,react trigers a reconcilation cycle
    //(re-renders the component)
    console.log(ListOfRestaurants);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async()=>{
        const data=await fetch(
             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
       setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return ( <h1>
        Looks like you are offline !! check your internet connection
    </h1>
    );
    
    return ListOfRestaurants.length===0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-md"
                 onClick={()=>{
                    //filter the reastaurant list and update the UI
                    //searchText
                   const filteredRestaurant= ListOfRestaurants.filter((res)=>
                   res.info.name.toLowerCase().includes(searchText.toLowerCase())
                   );
                   
                    setfilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">

            <button className="px-4 py-2 bg-gray-100 rounded-md" onClick={()=>{
              // filter logic here
              const filteredlist=ListOfRestaurants.filter(
                 (res)=>res.info.avgRating>4.5               
              );
              
              setfilteredRestaurant(filteredlist); 
                }}
                >Top Rated Restaurants
                </button>
            </div>
            </div>
            <div className="flex flex-wrap">
            {filteredRestaurant.map((restaurant) => 
        (<Link 
        key={restaurant.info.id} 
        to={"/restaurants/"+restaurant.info.id}
        >
        <RestaurantCard  resData={restaurant}/>
        </Link>
      ))}
                
            </div>
        </div>
    );
};
export default Body;
