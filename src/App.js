import './App.css';
import Home from "./pages/Home"

import background from "./top.png";

function App() {
  return (
    <div className="App" >
      <div className="comingsoon" style={{ backgroundImage: `url(${background})` }} > <h2>COMING SOON.</h2> </div>
      <Home></Home>
    </div>
  );
}

export default App;
