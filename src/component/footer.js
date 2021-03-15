import React from "react"


// component for footer
function Footer(props){
return(
<footer>
    <div className="row">
        <div className="col-md-4">
            <h3>CUSTOMER SERVICE</h3>
            <p>
                {/* onclick will change state value of App js  */}
                <a  href="#" onClick={() => props.handleChange("home")}>Home</a>
            </p>
            <p>
                <a  href="#" onClick={() => props.handleChange("about")}>About Us</a>
            </p>
            <p>
                <a  href="#" onClick={() => props.handleChange("contact")}>Contact Us</a>
            </p>
        </div>
        <div className="col-md-4">
            <h3>SECURE PAYMENTS</h3>
            <div className="row">
                <div className="col-md-4">   <i className="fab fa-cc-mastercard fa-4x"></i>
                </div>
                <div className="col-md-4"> <i className="fab fa-cc-visa fa-4x"></i>
                </div>
                <div className="col-md-4"><i className="fab fa-cc-paypal fa-4x"></i></div>
                <div className="col-md-4"><i className="fab fa-cc-amex fa-4x"></i></div>
                <div className="col-md-4"> <i className="fab fa-apple-pay fa-4x"></i></div>
                <div className="col-md-4"> <i className="fab fa-amazon-pay fa-4x"></i></div>

            </div>
            <p>
            </p>
        </div>
        <div className="col-md-4">
        <h3>Get In Touch</h3>
        <p><i className="fas fa-phone-alt"></i>  514 466-1812</p>
            <p><i className="fas fa-envelope"></i>  harshranpariya@gmail.com</p>
        </div>

    </div>



    <div className="clr"></div>
    <hr />
    <p id="copyright">&copy; 2020 Watch for you - All Rights reserved - Harsh Ranpariya 
        <span id="social">
            <i className="fab fa-facebook-square fa-2x"></i>
            <i className="fab fa-instagram-square fa-2x"></i>
            <i className="fab fa-twitter-square fa-2x"></i>
            <i className="fab fa-pinterest-square fa-2x"></i>
            <i className="fab fa-youtube fa-2x"></i>
        </span>
    </p>



</footer>

)

}


export default Footer;





