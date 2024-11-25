"use client"
import { useEffect } from "react";

// for animation on scroll library
import AOS from "aos"
import "aos/dist/aos.css"

// my components 
import { Detail } from "./detail";
import { Sidebar } from "./sidebar";
import MobileCard from "./mobileComponents/card";
import MobileEducation from "./mobileComponents/education";
import MobileExperience from "./mobileComponents/experience";
import MobileSkills from "./mobileComponents/skills";
import MobileProject from "./mobileComponents/project";
import MoblieContact from "./mobileComponents/contact";


const MainPage = () => {

    // useEffect for aos
    useEffect(() => {
        AOS.init({
            once: false,
        })
    }, [])

    return (
        <div>
            {/* Mobile view */}
            <div className="overflow-x-hidden bg-white h-screen md:hidden">
                {/* Card */}
                
                    <MobileCard />
                  
                {/* Education */}
                <MobileEducation />
                {/* Experience */}
                <MobileExperience />
                {/* Skill */}
                <MobileSkills />
                {/* Projects */}
                <MobileProject />
                {/* Contact */}
                <MoblieContact/>
            </div>

            {/* Desktop view */}
            <div className="hidden md:flex md:overflow-hidden md:h-screen">
                {/* sidebar */}
                <div className="w-1/5">
                    <Sidebar />
                </div >
                {/* main */}
                <div className="w-full">
                    <Detail />
                </div>
            </div>
        </div>
    )
}

export default MainPage