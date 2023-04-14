import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashShop from './pages/DashShop'
import DashProfile from './pages/DashProfile'
import DashPassword from './pages/DashPassword'
import DashOrders from './pages/DashOrders'
import Payment from './pages/Payment'
import Layout from './components/Layout'

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/dashboard-shop' element={<DashShop />} />
          <Route path='/dashboard-profile' element={<DashProfile />} />
          <Route path='/dashboard-password' element={<DashPassword />} />
          <Route path='/dashboard-orders' element={<DashOrders />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
