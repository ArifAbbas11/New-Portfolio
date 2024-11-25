import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin, } from "react-icons/fa"
import Link from "next/link";
import { IoLogoVercel } from "react-icons/io5";

const MobileCard = () => {
    return (
        <div className='h-[90vh] flex flex-col items-center justify-center'>
            <div data-aos="fade-up" className="card bg-blue-100 glass w-80 p-5 flex flex-col justify-center items-center">
                {/* image      */}
                <Image src="/profil.jpg" alt="profil-pic"
                    width={300} height={300}
                    className="rounded-full mx-auto" />
                <div className="card-body">
                    {/* Name here */}
                    <h1 className="card-title text-2xl text-center font-bold tracking-tight uppercase">Arif Abbas</h1>
                    <h2 className="text-md text-center font-semibold tracking-tight text-blue-700">
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'UI/UX Designer', 'Graphic Designer', 'IT Exective', 'Desktop Support Engineer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </h2>
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
                    <Link href={'/files/CV.pdf'} className="mt-4 w-full" target="_blank">
                        <Button>
                            <FaCloudDownloadAlt className="mr-2 h-4 w-4" />Download CV
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileCard
