import React from "react"

// header and footer file
import Header from "./component/header"
import Footer from "./component/footer"

import Home from "./component/home";
import ContactUs from "./component/contactus";
import AboutUs from "./component/aboutus";



class App extends React.Component {
  constructor() {
      super()
      // default state set to home page
      this.state = {
          currentPage:"home"
      }
      // bind handleChange function to constructor
      this.handleChange = this.handleChange.bind(this)
  }  
  // function that change state of this page
  handleChange(page) {
    this.setState({currentPage: page})
    }




  render(){

    // check value of state and set respective page in variable
    if(this.state.currentPage === "home"){
      var page = <Home />
    }else if(this.state.currentPage === "about"){
      page = <AboutUs />
    }else if(this.state.currentPage === "contact"){
      page = <ContactUs />
    }

    return(
      <div>
        {/* with using props manage event handling for menu */}
      <Header handleChange={this.handleChange} />     
      {page}
      <Footer handleChange={this.handleChange} />
      </div>
    )
  }
  
}

export default App