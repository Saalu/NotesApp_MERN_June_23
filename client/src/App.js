import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Notes from "./components/Notes";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      {isLogin ? <Notes /> : <Login setIsLogin={setIsLogin} />}
    </div>
  );
}

export default App;
