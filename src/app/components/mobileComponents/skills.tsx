import React from 'react'
import { FaCheck } from "react-icons/fa";

function MobileSkills() {
  return (
    <div className='w-full p-5'>
       <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Skills
    </h2>
      {/* Skills here */}
      <div className="mt-4 flex flex-wrap sm:-m-4 -mx-4 -mb-10 -m-4 ">
          {/* HTML */}
          <div className="p-4 w-full md:w-1/3 lg:w-1/3 flex">
            <div className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-blue-500 mb-4 flex-shrink-0">
              <FaCheck className="text-white text-md"/>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg font-semibold tracking-tight">
                HTML
              </h2>
              <div className="w-full h-1 rounded-lg bg-gray-500">
                <div className="w-[80%] h-1 bg-blue-500 rounded-lg"/>
              </div>
              <h3 className="text-blue-500 text-right text-sm font-semibold tracking-tight">80%</h3>
            </div>
          </div>
          {/* CSS */}
          <div className="p-4 w-full md:w-1/3 lg:w-1/3 flex">
            <div className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-blue-500 mb-4 flex-shrink-0">
              <FaCheck className="text-white text-md"/>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg font-semibold tracking-tight">
                CSS
              </h2>
              <div className="w-full h-1 rounded-lg bg-gray-500">
                <div className="w-[60%] h-1 bg-blue-500 rounded-lg"/>
              </div>
              <h3 className="text-blue-500 text-right text-sm font-semibold tracking-tight">60%</h3>
            </div>
          </div>
          {/* TypeScript */}
          <div className="p-4 w-full md:w-1/3 lg:w-1/3 flex">
            <div className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-blue-500 mb-4 flex-shrink-0">
              <FaCheck className="text-white text-md"/>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg font-semibold tracking-tight">
                TypeScript
              </h2>
              <div className="w-full h-1 rounded-lg bg-gray-500">
                <div className="w-[65%] h-1 bg-blue-500 rounded-lg"/>
              </div>
              <h3 className="text-blue-500 text-right text-sm font-semibold tracking-tight">65%</h3>
            </div>
          </div>
        {/* Nextjs */}
        <div className="p-4 w-full md:w-1/3 lg:w-1/3 flex">
            <div className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-blue-500 mb-4 flex-shrink-0">
              <FaCheck className="text-white text-md"/>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg font-semibold tracking-tight">
                Next.js
              </h2>
              <div className="w-full h-1 rounded-lg bg-gray-500">
                <div className="w-[50%] h-1 bg-blue-500 rounded-lg"/>
              </div>
              <h3 className="text-blue-500 text-right text-sm font-semibold tracking-tight">50%</h3>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default MobileSkills
