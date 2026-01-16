import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'

import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'

import SellerLogin from './components/seller/SellerLogin'
import SellerLayout from './pages/seller/SellerLayout'
import AddProduct from './pages/seller/AddProduct'
import ProductList from './pages/seller/ProductList'
import Orders from './pages/seller/Orders'

import { useAppContext } from './context/AppContext'

const App = () => {
  const location = useLocation()
  const isSellerPath = location.pathname.startsWith('/seller')
  const { showUserLogin, isSeller } = useAppContext()

  return (
    <div className="text-default min-h-screen text-gray-700">

    {/* Soft Backdrop (GLOBAL BACKGROUND) */}
      <div className='fixed inset-0 -z-10 pointer-events-none'>
        <div className='absolute left-1/2 top-20 -translate-x-1/2 
          w-245 h-115 bg-gradient-to-tr from-orange-700/35 
          to-transparent rounded-full blur-3xl' />
        
        <div className='absolute right-12 bottom-10 
          w-105 h-55 bg-gradient-to-bl 
          from-orange-600/35 to-transparent 
          rounded-full blur-2xl' />
    </div>

      {/* Navbar & Footer sirf USER pages pe */}
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Login />}

      <Toaster />

      <div className={isSellerPath ? '' : 'px-6 md:px-16 lg:px-24 xl:px-32'}>
        <Routes>

          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/loader" element={<Loading />} />

          {/* SELLER LOGIN (IMPORTANT) */}
          <Route path="/seller/login" element={<SellerLogin />} />

          {/* SELLER DASHBOARD */}
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>

        </Routes>

        {!isSellerPath && <Footer />}
      </div>

      
    </div>
  )
}

export default App