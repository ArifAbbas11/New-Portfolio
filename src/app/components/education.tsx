
import {
  Card,
  CardContent,
   CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from 'react'

function Education() {
  // My Education Here
  const education = [
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
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Education</CardTitle>

      </CardHeader>
      <CardContent className=" space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
         {/* Bachelors */}
          {education.map((item,i)=>(
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                {item.field}
              </span>
              <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
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

      </CardContent>
    </Card>
  )
}

export default Education
