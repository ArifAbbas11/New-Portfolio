
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaCheck } from "react-icons/fa";

import React from 'react'

function Skills() {
  // My Education Here
  // const skill = [
  //   {
  //     uniName: "Fedral Urdu University of Arts, Science and Technalogy",
  //     date: "5th Semister",
  //     field: "Bs Computer Science",
  //     details: "In process",
  //   },
  //   {
  //     uniName: "DEGREE COLLEGE GILGIT",
  //     date: "2015-2017",
  //     field: "Computer Science (ICS)",
  //     details: "Pass with C grade",
  //   },
  //   {
  //     uniName: "GUIDER SCHOOL & COLLEG",
  //     date: "2012-2014",
  //     field: "Science",
  //     details: "Pass with C grade"
  //   },


  // ]
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent className=" space-y-2">
        {/* Skills here */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
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
      </CardContent>
    </Card>
  )
}

export default Skills
