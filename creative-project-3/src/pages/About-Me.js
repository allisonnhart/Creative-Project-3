import { Outlet, Link } from "react-router-dom";
import React from "react"
import styles from './About-Me.css';

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    
    render() {
        return(
            <div>
                <p>We started with just a simple idea- what if you could search
                up cryptids in your area?</p>
                <p>Think of us as a popular search engine- but specifically for cryptids.</p>
                <p>In all seriousness, though, this started as a passion project to further
                push our passion about mysterious creatures- mostly Mothman, tbh.</p>
                <p>Anyways, have fun exploring our page and continue checking for updates!</p>
            </div>
        )
    }
}



const AboutMe = () => {
  return (<div><h1>About Our page</h1> <About/></div>)
};

export default AboutMe;