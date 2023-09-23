"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const AddTopic = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const router = useRouter();

   const handlesummit = async (e) =>{
   e.preventDefault();

   if(!title || !description){
      alert("title and description are required")
      return 
   }
   try {
   const res =  await fetch("http://localhost:3000/api/topics",{
      method:"POST",
      headers:{
         "content-type":"application/json"
      },
      body:JSON.stringify({title,description})
      })
      if(res.ok){
         router.refresh()
         router.push('/')
      }else{
         throw new Error("faild to create topic")
      }
   } catch (error) {
      console.log(error)
   }

   };


  return (
     <form onSubmit={handlesummit}
     className='flex flex-col gap-4'>
        <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        type="text"
        placeholder='add topic'
        className='border border-slate-500 px-8 py-2'
         />

        <input
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        type="text"
        placeholder='add description'
        className='border border-slate-500 px-8 py-2'
         />
        <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
         Add topic
         </button>
     </form>
  )
}

export default AddTopic