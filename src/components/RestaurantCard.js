import {CDN_URL} from '../../src/utils/constants'

const RestaurantCard = (props) =>{
const {resData}=props;

const {cloudinaryImageId,name, cuisines,costForTwo,avgRating}
=resData?.info;
return(
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
        <img 
        className="rounded-lg h-50 w-50 "
        alt="res-logo" 
        src={ CDN_URL + cloudinaryImageId }/>
        <h3 className="font-bold py-4 text-l">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4> 
        <h4>{avgRating} stars</h4>
    </div>
)
};

//Higher Order Component

//input -RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=>{
        return (
          <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg opacity-70 ">Offer valid</label>
            <RestaurantCard {...props} />
          </div>
        );
        
    }
}

export default RestaurantCard;