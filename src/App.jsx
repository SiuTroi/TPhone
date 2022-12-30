import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Notify from './components/Notify'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Laptop, Phone, Tablet,  Watch,  NetworkDevice,  
  KeyBoard,  Loudspeaker} from "./components/Menu/Products/index"
import { GiftPage, LoginPage, SignUpPage, ContactPage, CartPage, Blog, BlogDetail, 
  FavoritePage, EditUserPage } from "./components/Pages/index"
const HomePage = lazy(() => import('./components/Pages/Home/HomePage'))
const AllProduct = lazy(() => import('./components/Menu/Products/AllProduct'))
const ProductDetail = lazy(() => import('./components/Pages/Product/ProductDetail'))



function App() {
  const [showNotify, setShowNotify] = useState(true)

  return (
    <Suspense fallback={<div className='overlay z-9999'><div className='absolute-center loading'></div></div>}>
      <div className="App">
        <div className='fixed top-0 left-0 right-0 z-10'>
          {showNotify && <Notify setShowNotify={setShowNotify} />}
          <NavBar />
        </div>
          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/allproduct' element={<AllProduct />} />
            <Route path='/laptop' element={<Laptop />} />
            <Route path='/phone' element={<Phone />} />
            <Route path='/tablet' element={<Tablet />} />
            <Route path='/watch' element={<Watch />} />
            <Route path='/networkdevice' element={<NetworkDevice />} />
            <Route path='/keyboard' element={<KeyBoard />} />
            <Route path='/loudspeaker' element={<Loudspeaker />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:blogtitle' element={<BlogDetail />} />

            <Route path='/product/:nameproduct' element={<ProductDetail />}/>

            <Route path='/favorite' element={<FavoritePage />} />
            <Route path="/gift" element={<GiftPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/edituser' element={<EditUserPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        <Footer />
      </div>
      </Suspense>
  )
}

export default App
