import React, { Component } from 'react'
import './App.css';
import Hello from './Components/Hello'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import Greet from './Components/Greet'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import UserGreeting from './Components/UserGreeting'
import NameList from './Components/NameList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList />
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick />
        <FunctionClick /> */}
        {/* <Greet name="yash" heroName="shaktiman" />
        <Welcome name="Vinay" heroName="Doremon" />  */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Hello name="yash" heroName="shaktiman" >
          <p>This is children props!</p>
        </Hello>
        <Hello name="Ram" heroName="Batman">
          <button>Action</button>
        </Hello>
        <Hello name="Vinay" heroName="Doremon"/>
        <Hello name="tarun" heroName="Pickachu"/>
        <Welcome name="yash" heroName="shaktiman"> 
        <p>This is class children props!</p>
        </Welcome>
        <Welcome name="Ram" heroName="Batman" /> */}
      </div>
    );
  }
}

export default App;
