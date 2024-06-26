import { useState } from 'react'
import Sidebar from './component/Sidebar'
import Homepage from './component/Homepage'
import { Route, Routes } from 'react-router-dom'
import Favorites from './component/Favorites'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full'>
       <Sidebar/>
       <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route/>
       </Routes>
    </div>
  )
}

export default App
