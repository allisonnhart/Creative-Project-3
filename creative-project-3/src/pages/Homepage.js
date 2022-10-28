import { Outlet, Link } from "react-router-dom";
import React from "react"

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    
    render() {
        return(
            <div>
            
                <h2>Welcome to your new favorite cryptid website!</h2>
                <p>We are currently in our grassroots phase, so check back with us
                as we continue developing our page!</p>
                <p>Feel free to explore our page and leave us a review! (when we
                create one, of course)</p>
            
            </div>
        )
    }
}



 const Home = () => {
   return (<div><h1>Home Page</h1> <Homepage/> </div>)
 };

export default Home;