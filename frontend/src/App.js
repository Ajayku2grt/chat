import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Home from "./Components/Home";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="leftside">
        <Header/>
      </div>

      <div className="rightside">
        <Home/>
      </div>

      <div className="">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
