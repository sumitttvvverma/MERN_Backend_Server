import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Logout from './pages/Logout';
import AdminLayout from './layouts/Admin-Layout';
import AdminUsers from './layouts/Admin-Users';
import AdminContacts from './layouts/Admin-Contacts';
import AdminUpdate from './layouts/Admin-Update';

function App() {

  return (
    <>
<BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      
      <Route path='*' element={<Error/>}></Route>     

      {/* Nested Route */}
      <Route path="/admin" element={<AdminLayout/>}>
        <Route path='users' element={<AdminUsers/>}></Route>
        <Route path='contacts' element={<AdminContacts/>}></Route>
        <Route path='users/:id/edit' element={<AdminUpdate/>}></Route>
      </Route>
    </Routes>
</BrowserRouter>    
    </>
  )
}

export default App
