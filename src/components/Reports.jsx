import React from 'react'

const Reports = () => {
  return (
    <>
    <div className='bg-gray-500 w-full h-full p-6'>
      <div className=' bg-red-500 flex flex-row space-evenly p-4 gap-160'>
        <div>
          <h1 className='text-white text-4xl font-serif font-medium'>Health Reports</h1>
          <p className='pt-1 text-white text-medium font-serif font-medium'>Your complete history of health assessments</p>
        </div>
        <div className='align-right bg-[#43664D] w-41 h-13 border-2 border-[#43664D] rounded-3xl flex items-center justify-center'>
          <button className="text-white text-medium" onClick={() => navigate('/check')}>
          <span className="text-white text-medium">+ </span>
          New Check
        </button>
        </div>
      </div>
      <div className='flex flex-column space-evenly p-4 gap-4 items-center justify-center h-full w-full'>
        <div className='flex items-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            style={{ fill: '#FFFFFF' }}
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/>
          </svg>
        </div>
        <div>
          <h3>No reports yet</h3>
        </div>
        <div>
          <p>Complete your first health check to see your reports here</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Reports
