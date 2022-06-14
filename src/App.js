import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayount from "./pages/SharedLayount";
import SingleProduct from "./pages/SingleProduct";
import {useState} from 'react'
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
function App() {

const [user,setUser] = useState (null)
  return <BrowserRouter>

    <Routes>
      <Route path="/" element= {<SharedLayount />}>
        <Route index element={<Home/>} />
      <Route path="about" element= {<About />} />
      <Route path="Products" element= {<Products />} />
      <Route path='products/:productId' element={<SingleProduct />} />
      <Route path='login' element={<Login setUser={setUser}></Login>}/>
      <Route path='dashboard' element={<Dashboard user={user}></Dashboard>}/>

      <Route path='*' element={<Error />}/>
        </Route>
      </Routes>



  </BrowserRouter>
}

export default App;
