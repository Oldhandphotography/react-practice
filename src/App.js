import React,{Component} from 'react';
import './App.css';
import Greet from "./greet/Greet";
import Hellow from "./greet/Hello";
import Welcome from "./greet/welcome";
import Message from "./greet/Message";
import Counter from "./greet/counter.js";
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      {/* <Greet name="bruce" catagory="hero">
        <p>this is children props</p>
      </Greet>
      <Greet name="souvik" catagory="human">
        <button>hey its me </button>
      </Greet>
      <Greet name="natasha" catagory="po*n s*ar"/>
      <Welcome name="nakshit nice">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem ipsa asperiores ratione, repellendus quia odit sapiente ea minima explicabo eius nisi rem ad illum eos vel consequuntur adipisci similique cum beatae veritatis mollitia assumenda perspiciatis dolore! Quibusdam pariatur earum nisi suscipit, dolores quidem accusamus adipisci vero molestias iste corrupti.</p>
      </Welcome> */}
      {/* <Hellow/> */}
      <Message />
    </div>
  );
}

export default App;
