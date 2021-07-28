import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// JSX => JAVASCRIPT XML => JS + XML
// JS + HTML
// RETURN JSX.
// RULE :: JSX must be wrapped within paranthesis ( ) if it is multiline
// JSX can have only one parent tag.

// VIEW  => This is getting render in the browser
//INSIDE THE HTML U CAN ACCESS JS VARIABLE
//using the { }  you can write any JAVASCRIPT PROGRAM.

/* function App() {
  let title = "Hi Sweety";
  let list = ["Chennai", "Pune", "Oty"];
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  ); 

}*/
//************************* */
/* function App() {
  // data member
  let title = "Event Demo"; //title is variable

  // member function
  let myfun = () => {
    alert("Hey I am Click Handler");
  }; //assign fun to variable

  // binding members inside JSX. {}
  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="click here" onClick={myfun} />
    </div>
  );
} */

//***********   3     ****************
function App() {
  // let list = ["Hello", "Hello"];

  // ARRAY DESTRUCTURING
  const [list, setList] = useState(["Hello", "Hello"]);

  // ARROW FUNCTION
  const addNewHello = () => {
    //alert("Add new Hello Logic will come here");

    // list.push("Hello");

    // ARRAY CLONE
    const newList = [...list, "Hello"];
    setList(newList);
    console.log(list);
  };

  //VIEW
  //React is unaware of the changes of local variable
  return (
    <div>
      <h1> Working with event and list</h1>
      <input type="button" value="Hello" onClick={addNewHello} />

      {list.map((item) => {
        return <h3>{item} </h3>;
      })}
    </div>
  );
}
export default App;
