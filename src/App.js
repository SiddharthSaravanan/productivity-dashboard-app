import './App.css';
import Weather from "./Weather"
import Photo from "./Photo"
import Notes from "./Notes"

export default function App() {
  return (
    <div className="App">
      <Weather/>
      <Photo/>
      <Notes/>
    </div>
  );
}