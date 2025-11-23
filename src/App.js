import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/Signup';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './Components/Dashboard'
import PrivateRoute from './Components/PrivateRoute';
import Store from './Components/Store'
import AboutUs from './Components/AboutUs'
import ProductList from './Components/ProductList'
import { AuthProvider } from './Context/AuthContext';
import Reports from './Components/Reports';


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <ToastContainer position='top-center'></ToastContainer>
       
        <Routes>
           <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          {/* <Route path='/user/dashboard' element={<Dashboard></Dashboard>}></Route>  */}
          <Route path='/user/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />

          <Route path='/store' element={<PrivateRoute><Store /></PrivateRoute>} />
          {/* <Route path='/store' element={<PrivateRoute><Store></Store><PrivateRoute/>}></Route>  */}
          <Route path='/aboutUs' element={<AboutUs></AboutUs>}></Route> 
           <Route path='/products/:categoryId' element={<ProductList></ProductList>}></Route> 
            <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
            
          {/*
          <Route path='user' element={<PrivateRoute/>}>
          
            <Route path='dashboard' element={<Dashboard/>} />

          </Route>
          */}
        </Routes>
        

      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
