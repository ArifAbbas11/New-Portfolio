  
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"  
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./education"
import Experience from "./experience"
import Projects from "./projects"
import Skills from "./skills"
import Contact from "./contact"


export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-5">
        {/* Tabs Trigger Button */}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skill">Skill</TabsTrigger>
        <TabsTrigger value="project">Project</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      {/* Tabs content here */}
      {/* education */}
      <TabsContent value="education">
      <Education/>
      </TabsContent>
      {/* experience */}
      <TabsContent value="experience">
      <Experience/>
      </TabsContent>
      {/* skill */}
      <TabsContent value="skill">
      <Skills/>
      </TabsContent>
      {/* project */}
      <TabsContent value="project">
        <Projects/>    
      </TabsContent>
      {/* Contact */}
      <TabsContent value="contact">
        <Contact/>   
      </TabsContent>
    </Tabs>
  )
}

