import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black text-white p-3 w-full fixed z-10'>
            <div className='flex container justify-between m-auto'>

            <div className="logo font-bold text-xl"> <span className='text-green-500'>&lt;</span>Pass<span className='text-green-500'>OP/&gt;</span></div>
            <div className="nav-links"> 
                <a className='hover:text-white text-gray-400' href="">Github</a>
            </div>
            </div>
        </nav>

    )
}

export default Navbar
