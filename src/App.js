import React, { Component } from 'react';
import './App.css';

import Planet from './planet';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      planets: [
        { name: 'none' }, // once your loop works you can get rid of this
      ],
    };
  }

  updateName(event){
    this.setState({name: event.target.value})
  }

  componentWillMount(){
    console.log("hello")
    fetch("https://swapi.co/api/planets")
      .then(resp => resp.json())
      .then(response => {
        console.log(response.results);
        this.setState({planets: response.results})
  });
  }


  render() {
    // do loop here
    const planets = this.state.planets.map(planet => {
      
            return(
              <Planet details={planet} key={planet.name} />
              // <div className="planetDiv" key={planet.name}>
              //   <h3>{planet.name}</h3>
              //   <ul className="details">
              //     <li>Terrain: {planet.terrain}</li>
              //     <li>Climate: {planet.climate}</li>
              //     <li>Population: {planet.population}</li>
              //   </ul>
      
              // </div>
            );
      
          })
      


    return (

      <div className="App">
      <input type="text" placeholder="Name" 
        onChange={(event) => this.updateName(event)} 
        value={this.state.name} />

      <p>Pilot: {this.state.name}</p>

      <div className="App">
      <input type="text" placeholder="Name" 
        onChange={(event) => this.updateName(event)} 
        value={this.state.name} />
       
      </div>
        
        {planets}
        {/* <Planet details={this.state.planets[0]} /> */}

      </div>

    );
  }
}

// fetch("https://swapi.co/api/")
//   .then(resp => resp.json())
//   .then(response => {
//     console.log(response.results[1]);
//   });



export default App;
