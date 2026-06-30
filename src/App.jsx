
import { Routes, Route } from 'react-router-dom'
import Index from "../src/components/index"
import { ToastContainer } from "react-toastify";
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
      
      </Routes>
        <ToastContainer />
    </>
  )
}

export default App
