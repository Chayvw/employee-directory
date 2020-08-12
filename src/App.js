import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Random from "./containers/Home";

// import NavBar from "./component.jsx/NavBar";





function App() {
  return (
    <Router>
      {/* <NavBar/> */}
      <Route exact path="/" component={Random}/>
      {/* <Route exact path="/Email" component={Email}/>
      <Route exact path="/Gender" component={Gender}/>
      <Route exact path="/Location" component={Location}/> */}
        
    </Router>
  );
}

export default App;
