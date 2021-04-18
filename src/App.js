import {Component} from 'react'
//import logo from './logo.svg';
import './App.css';
import {CardList} from './Component/card-list/card-list.js'
import {SearchBox} from './Component/search-box/search-box.component.js'
//import { render } from '@testing-library/react';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField: ''
    };
    //this.handleChange=this.handleChange.bind(this); //binded manually, can be replaced by the arrow function
    //class method passed this to it so handle's this means the this from the class
  } 
  //lifecycle method==
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
      .then(users=> this.setState({monsters:users}))
  }

  handleChange= (e) => {
    //arrow function thats why it will bind the 'this' tp the one that was defined initially the app component
    this.setState({searchField:e.target.value})
  }

  render(){
    const{ monsters, searchField}= this.state;
    //same as const monsters=this.state.monsters; searchField=this.state.searchField
    const filteredMonsters= monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
      return (
      <div className='App'>
      <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search monsters'
          handleChange={this.handleChange}
          />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
// as soon as setstate function is called we call back the render() function
export default App;
