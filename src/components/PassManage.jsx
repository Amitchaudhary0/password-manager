import React, {useEffect}from 'react'
import { useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

 function PassManage() {

    
  const URL =  useSelector(state => state.site.value)
  
    return (
        <div className='container my-5 m-auto text-white' >
            <span className='text-xl'>
                Your Passwords
            </span>
            <table className='w-full mt-5 text-center'style={{tableLayout:'fixed', width:'100%'}}>
                <thead>
                <tr>
                    <th className='border border-white w-5/12'>Site</th>
                    <th className='border border-white w-3/12'>Username</th>
                    <th className='border border-white w-3/12'>Password</th>
                    <th className='border border-white w-1/12'>Actions</th>
                </tr>
                </thead>
                </table>
        <div  className='overflow-auto h-[34vh]'>
        <table className='w-full text-center'style={{tableLayout:'fixed', width:'100%'}}>
                <tbody>
                        {URL.map((e)=>{
                            return( <tr key={e._id}>
                            <td className='border border-white w-5/12'>{e.url}</td>
                            <td className='border border-white w-3/12'>{e.userName}</td>
                            <td className='border border-white w-3/12'>{e.pass}</td>
                            <td className='border border-white flex justify-evenly'><button><MdDelete  size={26}/></button><button><BiSolidMessageSquareEdit size={26} /></button></td>
                            </tr>)
                        })}
                       
                </tbody>
                </table>
                        </div>
            
        </div>
    )
}

export default PassManage
