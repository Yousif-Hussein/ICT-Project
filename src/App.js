import Footer from './components/Footer';
import './App.css';
import Nav from "./components/Nav"
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Reservation from './components/Reservation'
import Login from './components/Login'
function App() {
  return (
    <div className="App">
        <Nav/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
        <Footer/>
    </div>
  );
}
export default App;
