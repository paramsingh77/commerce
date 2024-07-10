import './App.css';
import Login from './Components/Login';
import ProductPage from './Components/ProductPage';
import Products from './Components/Products';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Signup from './Components/Signup';
import AddProduct from './Components/AddProduct';


function App() {
  return (
   <Router>
    
     {/* <Products/> */}
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/home' element={<Products/>}/>
      <Route path="/product/:title" element={<ProductPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/createProduct' element={<AddProduct/>}/>
    </Routes>
            
   </Router>
  );
}

export default App;
