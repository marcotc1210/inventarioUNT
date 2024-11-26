import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Layout from './components/Layout';
import Home from './pages/Dashboard';
import Devices from './pages/Devices';
import Accounts from './pages/Accounts';
import Login from './pages/Login';
import System from './pages/System';
// import UserHelp from './pages/UserHelp';
// import ProfileSettings from './pages/ProfileSettings';


function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="devices" element={<Devices/>} />
          <Route path="accounts" element={<Accounts/>} />
          <Route path="system" element={<System/>} />
          {/* <Route path="help" element={<UserHelp/>} />
          <Route path="help" element={<ProfileSettings/>} /> */}
        </Route>
         
      </Routes>
    </BrowserRouter>
  )
}

export default App


