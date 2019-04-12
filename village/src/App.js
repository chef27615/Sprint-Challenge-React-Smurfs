import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';



import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios
    .get('http://localhost:3333/smurfs')
    .then (res=>
      {this.setState({
        smurfs: res.data
      });
    })
    .catch(err=>{
      console.log('Error from smurfs: ', err)
    })
  }


addSmurf= smurf =>{
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(res => this.setState({
    smurfs : res.data
  }))
  .catch(err=> console.log('addSmurf Error ', err))
}

buttonGargamel = id =>{
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(res=>{
    this.setState({smurfs:res.data})
  }).catch(err=>{
    console.log('delect Error ', err)
  })
}




  render() {
    // console.log(this.buttonGargamel)
    return (
      <div className="App">
        <div className="navLinksDiv">
          <NavLink exact to='/'>
            The Village!
          </NavLink>
          <NavLink to='/smurf-form'>
            new Smurf
          </NavLink>
        </div>

        <Route 
          exact path="/"
          render={props=>(
            <Smurfs 
              {...props}
              smurfs={this.state.smurfs}
              buttonGargamel={this.buttonGargamel}
            />
          )}  />
        <Route 
          path="/smurf-form" 
          render={props=>(
            <SmurfForm 
            {...props}
            smurfs={this.state.smurfs}
            addSmurf ={this.addSmurf}
            />
          )} 
        />
      </div>
    );
  }
}

export default App;


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.