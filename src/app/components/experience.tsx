
import {
  Card,
  CardContent,
   CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from 'react'

function Experience() {
  
  // My Experience Here
  const experience = [
    {
    companyName:"Cloud innoveter Solution",
    dateSrart:"Aug-2024",
    dateEnd:"Continue",
    position:"IT Exective",
    details:"In process",
    work:["Fix Windows related issues.", "Fix network related issues.", "Fix hard ware related issues.", "CCTV monotring."]
  },
  {
    companyName:"Design Own Demand",
    dateSrart:"jan-2023",
    dateEnd:"Apr-2024",
    position:"Graphic Designer",
    details:"In process",
    work:["Logo Designing.", "Mescot Logo Designing.", "Gaming Related Designing.", "Motion Graphics"]
  },
  {
    companyName:"Dynamic Design",
    dateSrart:"Sep-2021",
    dateEnd:"Dce-2022",
    position:"IT",
    details:"In process",
    work:["Fix Windows related issues.", "Fix network related issues.", "Fix hard ware related issues."]
  },
  {
    companyName:"Bolan Enterprises",
    dateSrart:"Mar-2019",
    dateEnd:"May-2021",
    position:"OPS Officer",
    details:"In process",
    work:["Generate reports.", "Calculating estimates", "Sending reports", "Work on differnt shipping line softwars"]
  },
  

]
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Experience</CardTitle>

      </CardHeader>
      <CardContent className=" space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
         {/* Data here */}
          {experience.map((item,i)=>(
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                {item.position}
              </span>
              <span className="mt-1 text-gray-500 text-sm">{`${item.dateSrart} - ${item.dateEnd}`}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2  uppercase">
                {item.companyName}
              </h2>
              <ul className="ml-4 list-disc mr-1">
                {item.work?.map((element,i)=>(
                  <li key={i}>{element}</li>

                ))}
              </ul>
            </div>
          </div>
          ))}
        </div>

      </CardContent>
    </Card>
  )
}

export default Experience
