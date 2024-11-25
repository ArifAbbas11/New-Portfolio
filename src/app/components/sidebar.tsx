import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin, } from "react-icons/fa"
import Link from "next/link";
import { IoLogoVercel } from "react-icons/io5";

export function Sidebar() {
  return (
    <div className="h-screen border-blue-700 justify-center  flex flex-col items-center p-3 ">
      {/* image      */}
      <Image src="/files/profil.jpg" alt="profil-pic"
        width={300} height={300}
        className="rounded-full" />

      {/* Name here */}
      <div className="mt-3">
        <h1 className="text-2xl font-bold tracking-tight uppercase">Arif Abbas</h1>
        <h2 className="text-md text-center font-semibold tracking-tight text-gray-700">
          <Typewriter
            options={{
              strings: ['Web Developer', 'UI/UX Designer', 'Graphic Designer', 'IT Exective', 'Desktop Support Engineer'],
              autoStart: true,
              loop: true,
            }}
          />

        </h2>
    

      </div>

      {/* Social Media Account */}
      <div className="grid grid-cols-3 gap-2">
        {/* linkedin */}
        <div className="mt-2">
          <Link href="https://www.linkedin.com/feed/" target="_blank" className=" text-gray-800 hover:text-[#0762c8]">
            <FaLinkedin className="text-4xl" />
          </Link>
        </div>
        {/* versal */}
        <div className="mt-2">
          <Link href="https://vercel.com/arif-abbas-projects-2ad27cc0" target="_blank" className=" text-gray-800 hover:text-[#0762c8]">
            <FaGithubSquare className="text-4xl" />
          </Link>
        </div>
        {/* Github */}
        <div className="mt-2">
          <Link href="https://github.com/ArifAbbas11" target="_blank" className=" text-gray-800 hover:text-[#0762c8]">
            <IoLogoVercel className="text-4xl" />
          </Link>
        </div>

      </div>

      {/* Download CV Buttom   */}
      <Link href={'/files/CV.pdf'} className="mt-4" target="_blank">
        <Button>
          <FaCloudDownloadAlt className="mr-2 h-4 w-4" />Download CV
        </Button>
      </Link>
    </div>
  )
}