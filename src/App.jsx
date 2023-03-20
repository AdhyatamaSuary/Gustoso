import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Landing from "./page/Landing";
import Detail from "./page/Detail";
import Profile from "./page/Profile";

function App() {
    return (
          <>
          <Router>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/landing" element={<Landing />}></Route>
              <Route path="/detail" element={<Detail />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
          </Router>
          </>
    );
}

export default App;
