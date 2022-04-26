import "./App.css";
import Home from "./pages/Home";
import bg from "./assets/bgpng.png";
import styled from "styled-components";
import  Menu  from "./components/menu";
import Slider from "./components/slider";



function App() {

  return (
    <div className="App">
      <Menu/>
      <Slider />
    
    </div>
  );
}

export default App;
