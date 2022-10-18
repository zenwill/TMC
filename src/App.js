import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>

  );
};

export default App;
