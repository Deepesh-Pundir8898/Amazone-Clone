import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Banner from './components/home/Banner'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-bodyFont'>

        <Header />
        <Banner />
        <Footer />
      </div>
    </>
  )
}

export default App
