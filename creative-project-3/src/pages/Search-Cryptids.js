import { Outlet, Link } from "react-router-dom";
import React from "react"
import styles from './Search-Cryptids.js';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            topic: 'Feel free to search for your local cryptid!',
            warning: '*Local cryptids may not be available. Try:',
            suggest1: 'Moving to a local cryptid site',
            suggest2: 'Crying',
            suggest3: 'Lamenting the loss of making a personal connection with Mothman'
        }
    }
    
    render() {
        return(
            <div>
            
                <h2>{this.state.topic}</h2>
                <p>{this.state.warning}</p>
                <ol>
                    <li>{this.state.suggest1}</li>
                    <li>{this.state.suggest2}</li>
                    <li>{this.state.suggest3}</li>
                </ol>
            
            </div>
        )
    }
}


const SearchCryptids = () => {
  return (<div><h1>Find Cryptids Near You</h1> <Search/> </div>)
};

export default SearchCryptids;