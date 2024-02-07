import {useState, useEffect} from 'react';
import "./App.css"

export default function Notes() {

  const [text,setText] = useState(initText())

  function initText(){
    const inittext = localStorage.getItem("text");
    if (!inittext){
      return ">What are your goals for the day?"
    }
    return inittext;
  }

  function updateText(e){
    setText(e.target.value);
    localStorage.setItem("text",e.target.value);
  }

  return (
    <div className="notes">
      <div id="todo"><h4>Daily Goals</h4></div>
      <div id="textbox">
        <textarea value={text} onChange={updateText}></textarea>
      </div>
    </div>
  );
}
