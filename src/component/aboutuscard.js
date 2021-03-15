import React from "react"

// genereate one card for about us page
function AboutUscard(props){
    return(
    <div className="card">
        <img className="card-img-top img-responsive  box-img" src={props.img}  alt="Watch" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
        </div>
    </div>
    )
}

export default AboutUscard