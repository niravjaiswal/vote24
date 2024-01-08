import './App.css';
import Home from './home';
import { Route } from "wouter";
import Policies from './Policies'
import Candidates from './candidates';
import Map from './Map';


function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/policies" component={Policies} />
      <Route path="/candidates" component={Candidates} />
      <Route path="/map" component={Map} />
    </div>
  );
}

export default App;
