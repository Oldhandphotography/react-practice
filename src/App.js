import React,{Component} from 'react';
import './App.css';
import Greet from "./greet/Greet";
import Hellow from "./greet/Hello";
import Welcome from "./greet/welcome";
import Message from "./greet/Msg";
import Counter from "./greet/counter.js";
import Functionclick from "./greet/functionclick.js";
import Classclick from "./greet/classclick.js";
import Eventbind from "./greet/Eventbind.js";
import Parentcomponent from "./greet/parentcomponent.js"
import Usergreeting from "./greet/Usergreeting.js"
import Conditionalrendering from "./greet/conditionalrendering2.js"
import Conditionalrendering1 from "./greet/Conditionalrendering3.js"
import Namelist from "./greet/Namelist.js";
import Stylesheets from "./greet/Stylesheet.js"
import Inline from "./greet/inline.js";
import Styles from './greet/appStyles.module.css';
import Form from "./greet/Form.js";
import Lifecycle from "./greet/lifecycleA.js"
import Fragment from "./greet/fragmentDemo.js"
import PureComponent from "./greet/Purecomponent.js"
import Parentcompnt from "./greet/Parentcompnt.js"
import RefsDemo from "./greet/RefsDemo.js"
import RefsDemoUsingCallback from './greet/refsDemoUsingCallback.js';
import RefswithClass from "./greet/RefswithClass.js"
import FrParentinput from "./greet/frParentsinput.js"
import Portaldemo from "./greet/Portaldemo.js"
import Hero from "./greet/Hero.js"
import ErrorBound from "./greet/errorboundary.js"
import ClickCounter from "./greet/ClickCounter.js"
import Hovercounter from "./greet/Hovercounter"
import Hovercounter2 from "./greet/Hovercounter2.js"
import ClickCounter2 from "./greet/Clickcounter2.js"
import User from "./greet/User.js"
import Counter2 from "./greet/Counter2.js"
import ComponentC from "./greet/ComponentC.js"
import {UserProvider} from "./greet/userContext.js"
import ClassCounter from "./greet/classcounter.js"
// import Hookcounter from "./greet/Hookcounter.js"
import Hookcounter2 from "./greet/Hookcounter2.js"
import Hookcounter3 from "./greet/Hookcounter3.js"
import Hookcounter4 from "./greet/Hookcounter4.js"
import UseEffect1 from "./greet/useEffect1.js"
import UseEffect2 from "./greet/useEffect2.js"
import ClickCounterOne from "./greet/ClassCounterOne.js"
import Test from "./greet/test.js"

function App() {
  return (
    <div className="App">
      <ClickCounterOne />

      {/* <UseEffect2 /> */}
      {/* <UseEffect1 /> */}

      {/* <Hookcounter4 /> */}

      {/* <Hookcounter3 /> */}
      {/* <Hookcounter2 /> */}
      {/* <Hookcounter/> */}


     {/* <ClassCounter /> */}

      {/* <UserProvider value="vishwas">
        <ComponentC />
      </UserProvider> */}



      {/* <Counter2 
      render={(count,increaseCount) => (<ClickCounter2 count={count} increaseCount={increaseCount} />)}
       /> 

      <Counter2 
      render={(count,increaseCount) => (<Hovercounter2 count={count} increaseCount={increaseCount} />)}
       />  */}
      {/* <ClickCounter2 />
      <Hovercounter2 />
      <User render={(isloggedin)=> isloggedin ? 'vishwas':'guest'} /> */}


      {/* <Hovercounter /> */}
      {/* <ClickCounter name="souvik"/> */}


      {/* <ErrorBound >
          <Hero heroName="superman"/>      
      </ErrorBound>     
      <ErrorBound>     
          <Hero heroName="joker"/> 
      </ErrorBound>      */}
      {/* <Portaldemo /> */}
      {/* <FrParentinput /> */}
      {/* <RefswithClass /> */}
      {/* <RefsDemoUsingCallback /> */}
      {/* <RefsDemo /> */}
      {/* <Parentcompnt /> */}
      {/* <PureComponent /> */}
      {/* <Fragment /> */}
      {/* <Lifecycle /> */}
      {/* <Form /> */}
      {/* <h1 className={Styles.success}>Success</h1> */}
      {/* <Inline />       */}
      {/* <Stylesheets primary={true} /> */}
      {/* <Namelist /> */}
      {/* <Conditionalrendering1 /> */}
      {/* <Conditionalrendering /> */}
      {/* <Usergreeting /> */}
      {/* <Parentcomponent/> */}
      {/* <Eventbind />  */}

       {/* <Classclick /> */}
      {/* <Functionclick /> */}

      {/* <Counter></Counter> */}
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
      {/* <Message /> */}
    </div>
  );
}

export default App;
