import { CDN_URL } from "../utils/constants"

const ResCard=({restaurants})=>{
    const {info}=restaurants
    const {cloudinaryImageId,avgRating,cuisines,locality,areaName,sla}=info
    return(
    <div className="w-52 hover:border-2 border-black ">
      <div className="res-card text-wrap">
        <img className="res-logo"src={CDN_URL+cloudinaryImageId}/>
        <h4 className="font-bold text-xl">{info.name}</h4>
        <article className="break-words"><h5 >{cuisines.join(",")}</h5></article>
        <h5>{locality} ,{areaName}</h5>
        <h5>{sla.deliveryTime}MIN</h5>
        <h5>{avgRating}⭐</h5>
  
      </div>
      
    </div>
    )
  }
  export default ResCard