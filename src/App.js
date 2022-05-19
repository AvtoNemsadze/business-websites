import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Products } from "./Pages/Products";
import { Contact } from "./Pages/Login";
import "./App.css";


function App() {
  return (
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
      </Router>
  );
}

export default App;