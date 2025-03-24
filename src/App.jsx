import { useState,useEffect } from 'react'
import './App.css'
import { GetPost } from './API/PostApi'
import Posts from './Componenets/Posts';



function App() {
  console.log( GetPost());

  const getpostdata = async()=>{
    const res = await GetPost()
    console.log(res.data);
    
  }

  useEffect(() => {
    getpostdata()
  }, [])
  
  

  return (
    <section className='main-section'>
     <Posts/>
    </section>
  )
}

export default App
