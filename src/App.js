import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoinment from './Components/Appoinment/Appoinment/Appoinment';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import MyAppoinment from './Components/Dashboard/MyAppoinment/MyAppoinment';
import MyReview from './Components/Dashboard/MyReview/MyReview';
import AllUsers from './Components/Dashboard/AllUsers/AllUsers';
import RequireAdmin from './Components/Authentication/RequireAdmin/RequireAdmin';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import ManageDoctors from './Components/Dashboard/ManageDoctors/ManageDoctors';
import Payment from './Components/Dashboard/Payment/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <Home></Home>}></Route>
        <Route path='/appoinment'
          element={
            <RequireAuth>
              <Appoinment />
            </RequireAuth>
          }></Route>
        <Route path="/dashboard" element={
          <RequireAuth> <Dashboard /> </RequireAuth>}>
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="adddoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="managedoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
