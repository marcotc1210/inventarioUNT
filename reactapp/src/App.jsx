import { useState } from 'react'

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import Devices from './pages/Devices';
import Accounts from './pages/Accounts';
<<<<<<< HEAD
import Reports from './pages/Reports';
import System from './pages/System';
=======
// import Reports from './pages/Reports';
// import System from './pages/System';
>>>>>>> api
// import UserHelp from './pages/UserHelp';
// import ProfileSettings from './pages/ProfileSettings';


function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="devices" element={<Devices/>} />
          <Route path="accounts" element={<Accounts/>} />
<<<<<<< HEAD
          <Route path="reports" element={<Reports/>} />
          <Route path="system" element={<System/>} />
          {/* <Route path="help" element={<UserHelp/>} />
=======
          {/* <Route path="reports" element={<Reports/>} />
          <Route path="system" element={<System/>} />
          <Route path="help" element={<UserHelp/>} />
>>>>>>> api
          <Route path="help" element={<ProfileSettings/>} /> */}
        </Route>  
      </Routes>
    </BrowserRouter>
<<<<<<< HEAD
=======

>>>>>>> api
  )
}

export default App


