import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {PieChart,Pie,Cell} from 'recharts'


function Data() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{

          const userData = res.data.filter((post) =>post.userId === 1)
          setPosts(userData)
        })
    },[])

    const dataPiechart = [
        {name:'User 1 Posts',value:posts.length},
        {name:'Other Posts',value: 100 - posts.length},
    ];

    const clrs = ['#0088FE', '#00C49F']

  return (
    <div className='pl-5 pr-5 text-base capitalize bg-gradient-to-r from-cyan-500 to-blue-900'>
      <h1 className='text-2xl text-black text-center underline mb-5'>User Data</h1>
      <table className=' table-auto border-collapse border border-slate-400 bg-red-300'>
        <thead>
          <tr className='border-collapse border  border-slate-400'>
            <th className='bg-indigo-400 '>ID</th>
            <th className=' bg-cyan-400'>Title</th>
            <th className=' bg-indigo-400'>Body</th>
          </tr>
        </thead>
        <tbody >
          {posts.map((post) => (
            <tr className='border-collapse border border-slate-400' key={post.id}>
              <td className='border-collapse border  bg-indigo-400 p-2 border-slate-400'>{post.id}</td>
              <td className='border-collapse border bg-cyan-400  border-slate-400 p-2'>{post.title}</td>
              <td className='border-collapse bg-indigo-400 border-slate-400  p-2'>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PieChart width={500} height={500} className='m-auto mt-2 '>
        <Pie data={dataPiechart} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
          {dataPiechart.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={clrs[index % clrs.length]} />
          ))}
        </Pie>
        
      </PieChart>
      
    </div>
  )
}

export default Data