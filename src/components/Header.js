import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-around items-center bg-black/60 text-white p-5'>
      <Link to={"/"}>
        <div className='text-2xl'>
          HOme
        </div>
      </Link>
      <Link to={"/signup"}>
        <div className='text-2xl'>
          <button className='bg-black shadow-inner shadow-white p-4 hover:bg-white/80  hover:shadow-black hover:text-black'>

            Login signup
          </button>
        </div>

      </Link>
    </div>
  )
}

export default Header
