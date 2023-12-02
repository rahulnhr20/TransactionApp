import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Home() {
  return (
    <div className=' h-screen w-full mt-0'>
       <main className=' '>
            <div id='img' className=' flex items-center flex-col m-auto justify-center gap-10 text-white w-full h-screen bg-[url("https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-center' >
                <h1 className=' text-5xl border-b-[5px] border-indigo-300'>Welcome to Our App</h1>
                
                <p className=' text-3xl text-orange-100'>Your go-to platform for seamless <br /> transactions and data exploration.</p>
                <button className=' bg-blue-600 hover:bg-blue-900 rounded-lg p-2'>Get Started< ArrowForwardIcon/></button>
            </div>
       </main>
    </div>
  )
}

export default Home