import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

import React from 'react'

function Projects() {
  // My Projects Here
  let projects = [
    {
      proName: "CV Builder",
      link: "https://cv-builder-lilac-omega.vercel.app/",
      details: "Build your own CV from this site for free.",
      image:"CV-Builder.png"
    },
    {
      proName: "Movies Todo List",
      link: "https://cv-builder-lilac-omega.vercel.app/",
      details: "Stoer your favorite movies in this todo lis and enjoy.",
      image:"todo.png"
    },
  
  ]
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Projects
        </CardTitle>

      </CardHeader>
      <CardContent className=" space-y-2">

        <div className="flex flex-wrap -m-4">
          {/* cv Builder */}
          {projects.map((item,i)=>(

          <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative" >
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={`/files/${item.image}`}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
                <h2 className="text-lg font-semibold tracking-tight">
                  {item.proName}
                </h2>
                <p className="mt-3 leading-relaxed line-clamp-2">
                  {item.details}
                </p>
                <Link href={item.link} target="_blank" 
                className="text-sm font-medium tracking-tight hover:text-blue-500 hover:underline">
                  <p className="mt-3">View Project</p>
                    </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Projects

