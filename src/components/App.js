import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer';
import SortForm from './SortForm';

class App extends Component {

  state = {
    greased: false,
    sort: ''
  }

  checkHandler = () => {
    this.setState({greased: !this.state.greased})
  }

  radioHandler = (e) => {
    this.setState({sort: e.target.value})
  }

  radioBool = (value) => {
    if (this.state.sort === value){
        return true;
    } else {
        return false;
    }
}

  organizedHogs = (hogs) => {
    let output = hogs;

    if (this.state.greased) {
      output = output.filter(hog => hog.greased === true)
    }

    if (this.state.sort === 'Name') {
      output = output.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (b.name > a.name){
          return -1;
        } else {
          return 0;
        }
      })
    } else if (this.state.sort === 'Weight') {
      output = output.sort((a, b) => {
        if (a.weight > b.weight) {
          return 1;
        } else if (b.weight > a.weight){
          return -1;
        } else {
          return 0;
        }
      })
    }

    return output;
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <SortForm checkHandler={this.checkHandler} radioHandler={this.radioHandler} radioBool={this.radioBool} greased={this.state.greased}/>
        <HogContainer hogs={this.organizedHogs(hogs)}/>
      </div>
    );
  }
}

export default App;
