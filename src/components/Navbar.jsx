import React from 'react'
import { NavLink} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {
  return (
    <div>
        <nav className=' text-white bg-blue-500 bg-gradient-to-r from-indigo-500 w-full h-[60px] p-3'>
        <div className='flex justify-between items-center text-xl'>
            <div>
                <img className='h-10 w-10 rounded-full' src="https://images.pexels.com/photos/14911399/pexels-photo-14911399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <ul className='flex flex-row justify-between gap-10 m-auto'>
                <li><NavLink to="/" className=' hover:bg-blue-800 rounded-xl p-2'>Home</NavLink> </li>
                <li><NavLink to="/transaction" className=' hover:bg-blue-800 rounded-xl p-2'>Transaction</NavLink> </li>
                <li><NavLink to="/data" className=' hover:bg-blue-800 rounded-xl p-2'>Data</NavLink> </li>
            </ul>
            <div>
                
                <PersonIcon/>
            </div>
        </div>
       </nav>
    </div>
    
  )
}

export default Navbar