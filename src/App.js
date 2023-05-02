import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home";
import Staff from "./pages/Staff/Staff";
import Shopping from "./pages/Shopping/Shopping";
import Heads from "./pages/Staff/StaffPage/Heads";
import Accountant from "./pages/Staff/StaffPage/Accountant";
import Workers from "./pages/Staff/StaffPage/Workers";

function App() {
  // const [light, setLight] = useState("sun");

  const [darkMode, setDarkMode] = useState(
    JSON.parse(sessionStorage.getItem("mode")) || false
  )
  useEffect(()=> {
    sessionStorage.setItem("mode", darkMode)
  }, [darkMode]);

  // const toggleLight = () => {
  //   setLight((item)=>(item==="sun"?"moon":"sun"));
  // }

  return (
    <div className={`${darkMode ? "dark" : ""} h-screen`}>
      <Navbar setDarkMode={setDarkMode}
              darkMode={darkMode}
      />
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="staff" element={<Staff />}>
          <Route path="heads" element={<Heads />}/>
          <Route path="accountant" element={<Accountant />}/>
          <Route path="workers" element={<Workers />}/>
        </Route>
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
