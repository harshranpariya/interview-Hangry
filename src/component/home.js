import React from "react"
import Banner from "./banner"
import WatchGrid from "./watchGrid"
import WatchData from "./watchData"

function Home(){

    // use map function to iterate value from array and show it in grid view
    const watches = WatchData.map(item => <WatchGrid key={item.id} watch={item}/>)
    console.log(watches)

return(
   
    <div className="container">
        <Banner />

        <div id="main">
            <div id="title">
                    <div className="hr">
                        <hr />
                        <img src="./media/watch_logo.png" alt=""
                         />
                    </div>

            </div>

            {/*  welcome message  */}
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading" id="heading">welcome</h1>
                    <p id="content">
                        <i className="fas fa-quote-left quote"></i> No one buy luxury
                        watches just to be punctual 
                        <i className="fas fa-quote-right quote"></i>
                    </p>
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <div id="icon">
                                    <img src="./media/svg/globe.svg" alt="" />
                                </div>

                                <div id="context">
                                    <span>Seller over 100 countries</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div id="icon">
                                    <img src="./media/svg/trophy.svg" alt="" />
                                </div>

                                <div id="context">
                                    <span>The leading luxury watch marketplace since 2003</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div id="icon">
                                    <img src="./media/svg/buyers-protection.svg" alt="" />
                                </div>

                                <div id="context">
                                    <span>Shop securely thanks to Buyer Protection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* featured watches  */}


             <div id="featured">
                <h1>New Arrivals</h1>
                <h4>Just Shocked</h4>
                

                <div class="card-deck">
                    {/* show card grid view */}
                {watches}

                </div>
            </div>

            {/* testimonials */}

            <div id="testimonial">
                <h2>WHAT THEY’RE SAYING</h2>
                <p>I am really satisfied with this website, They are best seller for expensive watches.</p>
                <p id="name">-Harsh Ranpariya</p>
            </div>

            <hr id="hrfooter" />

        </div>

    </div>

)
}

export default Home

