
import './App.css';
import Nav from "./components/Nav"
import { Route, Routes } from 'react-router-dom';
import Reservation from './components/Reservation';
function App() {
  return (
    <div className="App">
        <Nav/>
        <Routes> <Route path='/reservation' element={<Reservation/>}/></Routes>
    </div>
  );
}

export default App;
