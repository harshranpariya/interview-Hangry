import React from 'react'

// component to design watch card body

function WatchGrid(props) {
    var path = "./media/"+props.watch.img
    console.log(path)
    return (
       
        <div className="card">
        <img className="card-img-top img-responsive center box-img" src={path}  alt="Watch" />
        <div className="card-body">
            <h5 className="card-title">{props.watch.title}</h5>
            <p className="card-text">C$ {props.watch.price}</p>
        </div>

    </div>
    )
}

export default WatchGrid