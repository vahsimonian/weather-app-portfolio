import React from 'react'

function TemperatureAndDetails() {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>clear</p>
      </div>

      <div className='flex flex-row items-center justify-between white py-3'>
        <img
          src={'https://cdn-icons-png.flaticon.com/512/831/831682.png'}
          alt='sun'
          className='w-20'
        />
        <p className='text-5xl'> 34° </p>
        <div className='flex flex-col space-y-2'></div>
      </div>
    </div>
  )
}

export default TemperatureAndDetails
