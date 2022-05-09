import React from "react";
import HogProfile from "./HogProfile";
function Tiles({hogs, showProfile, setShowProfile}){
    function handleTileClick(hog){
        console.log(hog)
        return HogProfile(hog)
    }
    return(
        hogs.map(hog => {
            return(
            <div key={hog.name} className="pigTile" onClick={handleTileClick}>
                <img src={hog.image} className="minPigTile" />
                <h3 className="pigTile h3">{hog.name}</h3>
            </div>
            )
            })
    )
}
export default Tiles;