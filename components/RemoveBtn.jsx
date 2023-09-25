"use client"
import { useRouter } from 'next/navigation'
import {HiOutlineTrash} from "react-icons/hi"

function RemoveBtn({id}) {
  const router = useRouter();
  const removeTopic = async() => {
  const confirmed = confirm('are you sure?');
  if(confirmed){
  const res = await fetch(`/api/topics?id=${id}`,{
    method:"DELETE",
  });
if(res.ok){
  router.refresh()
}
  }
}

  return (
    <button onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBtn