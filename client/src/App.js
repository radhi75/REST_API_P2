import { Route, Routes } from "react-router-dom";
import "./App.css";
import Adduser from "./components/Adduser";
import Navigation from "./components/Navigation";
import Userlist from "./components/Userlist";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/all" element={<Userlist />} />
        <Route path="/add" element={<Adduser />} />
      </Routes>
    </div>
  );
}

export default App;
