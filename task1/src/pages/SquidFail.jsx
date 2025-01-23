import React from 'react'

const SquidFail = () => {
  return (
    <div>
    <div className='flex flex-col gap-5 justify-center items-center h-screen'>
    <h1 className='text-4xl'>OOPS!</h1>
    <h1 className='text-2xl'>You lost in the squid game</h1>
    <a href='/home' className='bg-gradient-to-br from-red-500 to-yellow-400 p-4 rounded-lg text-white font-bold'>Try Again</a>
    </div>
      
    </div>
  )
}

export default SquidFail
