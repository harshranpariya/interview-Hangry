import React from 'react'
import AboutUscard from './aboutuscard'


function AboutUs(){
    return(
        <div>
           
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../media/about.jpg" alt="First slide" />
                        <div class="carousel-caption">
                            
                                <h3>Luxury watches fascinate us.
                                    Watch enthusiasts inspire us.</h3>
                            
                        
                        </div>
                    
                    </div>
                </div>
            </div>

            <div class="container">

                <div id="main">
                    <div id="title">
                        <div class="hr">
                            <hr />
                            <img src="./media/watch_logo.png" alt="" />
                        </div>
                        <h1 id="heading">COMPANY</h1>
                        <p id="content-about">
                            People who love luxury watches inspire us as much as precious timepieces. That’s why sellers and
                            buyers of luxury watches have our undivided attention.
                        </p>
                    </div>

                    <hr id="hrfooter" />
                    <p id="content-about"> We know that our company wouldn’t exist without valuable watches and enthusiastic
                        watch lovers. But we are not only fond of high-quality timepieces and their admirers. The complexities
                        of information technology and the challenges of global markets also motivate us to push ourselves
                        further every day. Because web and mobile technologies are our core competencies</p>


                                
                <div id="container">
                    <div id="details">
                    
                        <div class="card-deck">


{/* use AboutUscard component to create grid view and pass props parameter */}
                            {<AboutUscard 
                                img="./media/about1.jpg"
                                title="GLOBAL PLAYER"
                                desc="The luxury watch market is global. Watch for you provides easy, safe, and reliable market access to all watch enthusiasts."
                            />}
                            {<AboutUscard 
                                img="./media/about2.jpg"
                                title="MISSION"
                                desc="There is something that propels us forward. An idea that we pursue in full stride. Our long-term goal for Watch for you."
                            />}
                            {<AboutUscard 
                                img="./media/about3.jpg"
                                title="FACTS & FIGURES"
                                desc="The luxury watch market is global. Watch for you provides easy, safe, and reliable market access to all watch enthusiasts."
                            />}
                            
                        </div>

                        </div>
                    </div>
                
                    <hr id="hrfooter" />
                </div>
            </div>
            </div>
 
    )
}

export default AboutUs