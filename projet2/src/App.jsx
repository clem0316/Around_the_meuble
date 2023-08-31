import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import Adminpage from "./pages/Adminpage";
import Loginpage from "./pages/Loginpage"
import Furniturespage from './pages/Furniturespage';
import Singlefurniturepage from './pages/Singlefurniturepage';
import Signinpage from './pages/Signinpage';
import Cartpage from './pages/Cartpage';


function App() {

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='*' element={<Homepage/>} />
      <Route path='/admin' element={<Adminpage/>}/>
      <Route path='/login' element={<Loginpage/>} />
      <Route path='/furnitures' element={<Furniturespage/>} />
      <Route path='/singlefurniture' element={<Singlefurniturepage/>} />
      <Route path='/signin' element={<Signinpage/>} />
      <Route path='/cart' element={<Cartpage/>} />


    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
