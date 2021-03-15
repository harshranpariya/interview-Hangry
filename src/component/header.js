import React from "react"

function Header(props){

   

    
        return(
        
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">
                    <div className="logo">
                        <a className="logo" href="{null}">Watches for You</a>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto"  style={{float:'right'}}>
                        <li className="nav-item active">
                            {/* onclick event will chagne state value */}
                            <a className="nav-link" href="#" onClick={() => props.handleChange("home")}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"  onClick={() => props.handleChange("about")} >About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => props.handleChange("contact")}>Contact Us</a>
                        </li>
                        </ul>
    
                </div>
            </nav>
    
        </header>
        
        )
    }  
    


export default Header