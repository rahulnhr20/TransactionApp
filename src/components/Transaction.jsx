import React, { useState } from 'react'
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import firebaseApp from '../firebase';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fireStore = getFirestore(firebaseApp)
function Transaction() {
    const [walletad,setWalletad] = useState('');
    const [amt,setAmt] = useState(0)
  

   
    const sendData = async () =>{
        

        if(!walletad){
            alert('Invalid wallet address. Please enter a valid Ethereum address.')
        }

        if(isNaN(amt) || 0<amt || amt>10000){
            alert('Please enter a number within the range of 0 to 10,000.')
        }

        

            try {
            
                const walletdata = await addDoc(collection(fireStore,'User'),{
                    WalletAddress:walletad,
                    Amount: parseFloat(amt),
                    Time: new Date(),
                })
                console.log(walletdata)
                setWalletad('')
                setAmt(0)
                alert('Transaction data submitted successfully!');
            } catch (error) {
                console.log('Error:',error)
                alert('An error occurred ,Please try again')
            }
        
        
    }
  return (
    <div className=' bg-[url("https://images.pexels.com/photos/6289031/pexels-photo-6289031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] w-full h-full p-1'>
        <div className='mt-[100px] rounded-lg h-[200px] w-[500px]  m-auto flex justify-center gap-2 p-3 items-center flex-wrap bg-gradient-to-r from-indigo-500 ..  text-2xl'>
            <label >Wallet-Address:
            <input type="text" className=' ml-2 rounded-lg w-[50%]' value={walletad} onChange={(e)=>setWalletad(e.target.value)}/></label>
            <label >Amount:
            <input className=' ml-2 rounded-lg w-[50%]' type="text" value={amt} onChange={(e)=>setAmt(e.target.value)} /></label>
            <button className=' hover:bg-indigo-600 bg-gradient-to-r from-indigo-500 ..  p-2 rounded-lg text-xl' onClick={sendData} >Submit < ArrowForwardIcon/></button>
        </div>
    </div>
    
  )
}

export default Transaction