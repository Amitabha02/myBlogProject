import React, { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch =  useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }

      else{
        dispatch(logout())
      }
    })
    
    .catch((error)=>{
      console.log("Error occure in useEffect defined in App.jsx", error);
    })

    .finally(setLoading(false))
  
  }, [])
  


  return !loading ? (
    <div className='min-h-screen flex-wrap content-between bg-gray-400'>

      <div className='w-full block'>

        <Header/>
        <main>
       My Articles <Outlet/> 
        </main>
        <Footer/>
      </div>
    </div>
  ) : (null)
}

export default App
