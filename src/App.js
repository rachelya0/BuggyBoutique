import './App.css';
import Header from "./Header";
import Home from "./Home";
import SignIn from "./SignIn";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() { 
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/checkout" component={Checkout}>
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/" component={Home}>
            <Header/>
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
