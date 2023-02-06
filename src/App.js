import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoinment from './Components/Appoinment/Appoinment/Appoinment';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <Home></Home>}></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
