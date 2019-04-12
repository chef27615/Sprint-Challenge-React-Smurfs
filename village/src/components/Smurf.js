import React, { Component }from 'react';

class Smurf extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  buttonGargamel = e =>{
    e.preventDefault();
    this.props.buttonGargamel(this.props.id)
  }

  render(){
   console.log(this.props.id)
    return (
    <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button onClick={this.buttonGargamel}>Gargamel</button>
    </div>
  );
  }
  
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

