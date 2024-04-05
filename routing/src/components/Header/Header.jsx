import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5' >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to='/' className='flex items-center'>
            <img src="https://images.pexels.com/photos/20755698/pexels-photo-20755698/free-photo-of-a-woman-and-child-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='mr-3 h-12' alt="" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default header