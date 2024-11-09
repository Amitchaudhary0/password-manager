import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addSiteData, deleteSiteData, fetchData } from '../Redux/features/site/siteSlice';

function InputData() {
 const dispatch = useDispatch();
 const [url, setUrl] = useState("")
 const [userName, setUserName] = useState("")
 const [pass, setPass] = useState("")

 useEffect(()=>{
  dispatch(fetchData())
  console.log("i run because dispatch run");
 },[dispatch])

  const handelUrl=(e)=>{
    setUrl(e.target.value)  
  }
  const handelUser=(e)=>{
    setUserName(e.target.value)  
  }
  const handelPass=(e)=>{
    setPass(e.target.value)  
  }

  const handelAdd=async()=>{
    await dispatch(addSiteData({url,userName,pass}))
    setUrl("");
    setPass("");
    setUserName("");
  }
  const handelDeleteAll=()=>{
    dispatch(deleteSiteData())
    // dispatch(fetchData())
    setUrl("");
    setPass("");
    setUserName("");
  }

  return (
    <div className=' w-full'>
    <div className='w-2/3 m-auto mt-20 text-white'>
        <div className="container text-center">
            <div className='font-bold text-3xl'><span className='text-green-500'>&lt;</span>Pass<span className='text-green-500'>OP/&gt;</span></div>
            <div className='text-xl'>Your Own Password Manager</div>
        </div>
      <div className="inputfield flex flex-col gap-3 items-center text-black">
        <input className='sm:w-2/3 w-full p-2 mt-10 text-center rounded-sm' type="text" value={url} placeholder='Enter Your Website URL' onChange={handelUrl}/>
        <div className='sm:w-2/3 w-full flex gap-3'>
        <input className=' w-2/3 p-2 rounded-sm' type="text" placeholder='Enter Username' value={userName}  onChange={handelUser}/>
        <input className=' w-1/3 p-2 rounded-sm' type="Password" placeholder='Enter Password' value={pass} onChange={handelPass}/>
        </div>
        <div>
        <button className='bg-black font-bold p-2 px-4 rounded-full hover:bg-green-500 mr-2 text-white' onClick={handelAdd}>Add Password</button>
        <button className='bg-black font-bold p-2 px-4 rounded-full hover:bg-green-500 text-white' onClick={handelDeleteAll}>Delete All</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default InputData
