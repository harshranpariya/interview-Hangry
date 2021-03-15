import React from "react"

// component for contact us page

function ContactUs(){


return(
<div>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="../media/contact.jpg" alt="First slide" />
                
            
            </div>
        </div>
    </div>


<div className="container">
    <div id="contact">

        <div className="row">
            <div className="col-md-3">
                <h1>Get in touch !</h1>
               
               
                <p> <i className="fas fa-envelope quote"></i> harshranpariya@gmail.com </p>
                <p> <i className="fas fa-mobile-alt quote"></i> +1 514-466-1812</p>

            </div>

            <div className="col-md-9">
                <h1>Send Your Query !</h1>
                <form className="myForm">
                    <div className="from-grp">
                        <label for="name">Name:</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="from-grp">
                        <label for="email">Email:</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="from-grp">
                        <label for="msg">Message:</label>
                        <textarea name="msg" rows="5"></textarea>

                    </div>
                    <input type="submit" value="submit" className="btn btn-outline-secondary" />
                </form>




            </div>


        </div>


    </div>


    <hr id="hrfooter" />

</div>
</div>


)
}

export default ContactUs

