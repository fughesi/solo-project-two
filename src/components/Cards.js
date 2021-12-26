import React from "react"

export default function Cards(props) {
    console.log(props)
    return (
        <div id="cardContainer">
            <img src={props.imageUrl} alt="" />
            <div id="cardText">
                <h3>{props.location} <a href={props.googleMapsUrl}>View on Google Maps</a></h3>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}