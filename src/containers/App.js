import React, { Component } from "react";
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import {presidents} from './presidents';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            // presidents: presidents,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        // const filteredPresidents = this.state.presidents.filter(pres => {
        //     return pres.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        const filteredPresidents = presidents.filter(pres => {
            return pres.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className='tc'>
                <h1 className='f1'>United States Presidents</h1>
                <Searchbox search = {this.onSearchChange}/>
                <Scroll>
                    <CardList presidents = {filteredPresidents}/>
                </Scroll>
            </div>
        );
    }
}

export default App;