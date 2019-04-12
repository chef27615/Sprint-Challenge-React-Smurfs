import React, { Component }from 'react';

class Smurf extends Component {

  buttonGargamel = e =>{
    e.preventDefault();
    this.props.buttonGargamel(this.state)
  }

  render(){
console.log(this.props.buttonGargamel)
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

