import React, { Component } from 'react';
import Tabs from "./Tabs";
import './App.css';

import ListContacts from './ListContacts'

class App extends Component {
constructor(props){
    super()
    this.state = {
      contacts : [
        {
          id: '1',
          name: 'Misbah',
          handle: '@misbah',
          avatarURL: 'http://localhost:5001/misbah.jpg'
        },
        {
          id: '2',
          name: 'Noor',
          handle: '@Noor',
          avatarURL: 'http://localhost:5001/Noor.jpg'
        },
        {
          id: '3',
          name: 'Imran',
          handle: '@Imran',
          avatarURL: 'http://localhost:5001/Imran.jpg'
        },
      ]
    }
  
  // this.removeContact = this.removeContact.bind(this)
    
  }
  removeContact= (contact)=>{
    console.log(this);
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
}

  render() {
    return (
      <div className="App">
       <Tabs/>
       <ListContacts 
       contacts={this.state.contacts} 
       onDeleteContact = {this.removeContact}
       />
      
      </div>
    );
  }
}

export default App;