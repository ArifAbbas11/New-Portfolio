import React from 'react'

function MobileEducation() {
  let education = [
    {
    uniName:"Fedral Urdu University of Arts, Science and Technalogy",
    date:"5th Semister",
    field:"Bs Computer Science",
    details:"In process",
  },
  {
    uniName:"DEGREE COLLEGE GILGIT",
    date:"2015-2017",
    field:"Computer Science (ICS)",
    details:"Pass with C grade",
  },
  {
    uniName:"GUIDER SCHOOL & COLLEG",
    date:"2012-2014",
    field:"Science",
    details:"Pass with C grade"
  },
  

]
  return (
    <div className='w-full p-5'>
      <h2 className="scroll-m-20 border-b border-blue-200 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Education
    </h2>
       <div className="mt-4  divide-y-2 divide-blue-300">
         {/* Bachelors */}
          {education.map((item,i)=>(
            <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                {item.field}
              </span>
              <span className="mt-1 text-blue-500 text-sm">{item.date}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2  uppercase">
                {item.uniName}
              </h2>
              <p className="leading-relaxed">
                {item.details}
              </p>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default MobileEducation
