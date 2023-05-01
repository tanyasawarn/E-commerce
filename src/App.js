import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home  from "./pages/Home/Home";
import Shop  from "./pages/Shop/shop";
import About  from "./pages/About/about";
import Contact  from "./pages/ContactUs/contact";
import Cart from "./pages/cart/cart";
import ProductDetails from './pages/Shop/ProductDetails';
import './App.css';
import { ShopContextProvider } from './context/shop-context';

function App() {
   return (
    <div>
    <ShopContextProvider> 
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/store' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
     </BrowserRouter>
     </ShopContextProvider>
    </div>
   )
}

export default App;