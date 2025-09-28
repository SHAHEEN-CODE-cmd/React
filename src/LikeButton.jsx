import {useState} from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked]=useState(false);
    let [clicks, setClicks]=useState(0);
    let toggleLike=()=>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    };

    return(
        <div>
            <p>Clicks: {clicks}</p>
            <p onClick={toggleLike} style={{cursor:"pointer"}}>
            {isLiked ?(
                <i className="fa-solid fa-heart" style={{color:"red"}}></i>
            ):(
                <i className="fa-regular fa-heart"></i>
            )}
            </p>
        </div>
    );
}