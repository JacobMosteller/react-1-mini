import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    myFriends: [],
    picture: '',
    name:''
  }
this.updateName=this.updateName.bind(this)
this.updatePicture=this.updatePicture.bind(this)
}
updatePicture(event){
  this.setstate({
    picture: event.target.value
  })
}
updateName(event){
  this.setstate({
    name: event.target.value
  })
}



  render() {
    return (
      <div className="App">
       <label>Picture:</label>
       <input type="url" value={this.state.picture}/>
       <label>Name:</label>
       <input type="text" value={this.state.name}/>
       <button>Add Friend</button>
      </div>
    );
  }
}

export default App;
