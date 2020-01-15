import React from 'react';
import './App.scss';
import SearchBox from './Components/SearchBox';
import Maps from './Components/Maps';
import MapsList from './Components/MapsList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dogs : [
        {name : 'La Grande Cuisine', breed : "Mer. 14h-16h", meter : "400m"},
        {name : 'Chez Pierrot', breed : "Mer. 12h-15h"},
        {name : 'Le Bon Chef ', breed : "Mer. 12h-19h"},
      ],
      searchDog: ''
    }
  }
  handleInput = (e) =>{
    console.log(e.target.value)
    this.setState({ searchDog : e.target.value})
  }
  render(){
    let filter = this.state.dogs.filter((dog) => {
      return dog.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
    })
    return(
      <div className="App">
        <SearchBox handleInput={this.handleInput}/>
        <h1>Restaurant</h1>
        <MapsList filter={filter}/>
      </div>
    )
  }
}

export default App;
