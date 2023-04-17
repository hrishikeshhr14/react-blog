import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import TopBar from "./components/topbar/topbar";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
 import Settings from "./pages/settings/Settings";
 import Single from "./pages/single/Single";

import{ BrowserRouter as Router,Route,  Routes } from "react-router-dom";
function App() {
  const user = false; 
  return (
 <Router>
  <TopBar />
  <Routes>
  <Route exact path="/" element={<Home/>} />
  <Route path="/register" element={user ? <Home /> : <Register />} />
  <Route path="/login" element={user ? <Home /> : <Login />} />
  <Route path="/write" element={user ? <Write /> : <Register />} />
  <Route path="/settings" element={user ? <Settings /> : <Register />} />
  <Route path="/post/:postId" element={<Single />} />
    {/* <Route path ="/register">
     
    </Route> */}
    {/*<Route exact path ="/login">
    {user ? <Home/> :<Login />}
     </Route>
    <Route exact path ="/write">
      <Write />
    </Route> */}
    {/* <Route exact path ="/settings">
      <Settings />
    </Route> */}
    {/* <Route exact path ="/post/:postId">
      <Single/>
    </Route> */}
    
  </Routes>
 </Router>
  );
}

export default App;
