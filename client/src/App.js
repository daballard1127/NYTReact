
// Include the Main React Dependencies
import React from "react";
import Articles from "./components/common/Articles/Articles";
import { BrowserRouter , Route } from "react-router-dom";
const App = () => 
(<BrowserRouter>
<Route path="/" component={Articles}>
</Route>
</BrowserRouter>)
  
  
  

export default App;
