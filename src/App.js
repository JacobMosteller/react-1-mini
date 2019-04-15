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
this.addFriend=this.addFriend.bind(this)
}
updatePicture(event){
  this.setState({
    picture: event.target.value
  })
}
updateName(event){
  this.setState({
    name: event.target.value
  })
}
addFriend(){
  const newFriend={
    picture:this.state.picture,
    name: this.state.name
  }
  const tempFriends = this.state.myFriends.slice();
  tempFriends.push(newFriend)

  this.setState({
    myFriends: tempFriends,
    name: "",
    picture: ""
  })
}


  render() {
    const{myFriends,name,picture}=this.state
    const friends=myFriends.map((friend)=>(<div>
      <img src = {friend.picture}/>
      <h2>{friend.name}</h2>
    </div>
    ))
    return (
      <div className="App">
       <label>Picture:</label>
       <input type="url" value={picture} onChange={this.updatePicture}/>
       <label>Name:</label>
       <input type="text" value={name} onChange={this.updateName}/>
       <button onClick={this.addFriend}>Add Friend</button>
       <label>My Friends:</label>
       {friends}
      </div>
    );
  }
}

export default App;
