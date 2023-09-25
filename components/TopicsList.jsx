import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from "react-icons/hi"
import Link from 'next/link'

const getTopic = async() =>{
  const apiUrl = process.env.API_URL
    try {
     const res = await fetch(`${apiUrl}/api/topics`,{cache:'no-store'})
     if(!res.ok){
      throw new Error("faild to fetch topics")
     }
     return res.json()
    } catch (error) {
      console.log(error)
    }
  }

const TopicsList = async () => {
  const {topics} = await getTopic()
  return (
    <>
    {topics.map(t=>(
      <div className='p-4 border border-slate-300 my-3 flex justify-between gap   items-start'>
        <div className =''>
          <h2 key={t.title} className='text-2xl font-bold'> {t.title}</h2>
          <div key={t.description} >{t.description}</div>
        </div>
        <div className='flex gap-2'>
          <RemoveBtn id = {t._id} />
          <Link href={`/editTopic/${t._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    ))}
    </>
  )
}

export default TopicsList