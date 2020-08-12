import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./containers/Home";

// import NavBar from "./component.jsx/NavBar";





function App() {
  return (
    <Router>
      <Home />
      {/* <Route exact path = "/" component = {Home} /> */}
    </Router>
  );
}

export default App;
