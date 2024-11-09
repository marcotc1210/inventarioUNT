import React from 'react'
// import TableDevices1 from '../components/TableDevices1'
import TableDevices from '../components/TableDevices'
import TitlePage from '../components/TitlePage'
// import Table from '../components/Table'

const Devices = () => {
  return (
    <div>
      <TitlePage title="Dispositivos" />
      <div>
        {/* <TableDevices1/> */}
        <TableDevices/>
      </div>
      
    </div>
  )
}

export default Devices