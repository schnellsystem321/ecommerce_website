import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Rating ({value,text,color}) {
    return(
        <div className="rating">
            <span >
                <i style={{color}} className={
                    value >= 1
                    ? 'fas fa-star'
                        : value >= 0.5
                    ? 'fas fa-star-half-alt' : 'far fa-star'
                }>

                </i>
            </span>
            <span >
                <i style={{color}} className={
                    value >= 2
                    ? 'fas fa-star': value >= 0.5
                    ? 'fas fa-star-half-alt' : 'far fa-star'
                }>

                </i>
            </span>
            <span >
                <i style={{color}} className={
                    value >= 3
                    ? 'fas fa-star': value >= 0.5
                    ? 'fas fa-star-half-alt' : 'far fa-star'
                }>

                </i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 4
                        ? 'fas fa-star' : value >= 0.5
                        ? 'fas fa-star-half-alt' : 'far fa-star'
                }>

                </i>
            </span>

        </div>
    )
}

export default Rating