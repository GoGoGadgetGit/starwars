import React, { Component } from 'react';

class Planet extends Component {
    constructor(props) {
      super(props);
  
    
    }
  
    // display() {
      
    // }
  
    render() {
      return (
        <div className="planetDiv" key={this.props.details.name}>
        <h3>{this.props.details.name}</h3>
        <ul className="details">
          <li>Terrain: {this.props.details.terrain}</li>
          <li>Climate: {this.props.details.climate}</li>
          <li>Population: {this.props.details.population}</li>
        </ul>

      </div>
      )
    }
  }

  export default Planet;