import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <img className="image" src={process.env.PUBLIC_URL+"/images/dopeislandlogo.png"}></img>
        <h1 className="ComingSoon">Comming soon...</h1>
      </div>
    </div>
  );
}

export default App;
