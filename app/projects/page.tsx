"use client"
import React, {  useRef } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { ProjectCard } from "@/components/ProjectCard";
import { projectData } from "@/data/projects";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import NavButton from "@/components/navbutton";
import { FaHome } from "react-icons/fa";

export default function SpotlightPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
 // const ref = useRef<HTMLDivElement>(null);
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setHeight(rect.height);
  //   }
  // }, []);


  return (
    <div>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative ">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-center">
          <h1 className="text-8xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Projects <br />
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
            Hope u &apos;ll love it + Enjoy exploring it more + Open for feedbacks + <br /> can connect me on socials
          </p>

          {/* About Me Section */}
          <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-10 flex flex-col sm:flex-row justify-center items-center" ref={containerRef}>
            
            <motion.div className="flex flex-col sm:flex-row justify-center item-center gap-4 mt-6 md:mt-0" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } } }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link href="https://x.com/withabhinay" target="_blank" className="px-6 py-2 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-md shadow-md transition duration-300 hover:bg-white/20 flex items-center gap-2">
                  <FaTwitter className="text-blue-600" /> Twitter
                </Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link href="https://linkedin.com/in/withabhinay" target="_blank" className="px-6 py-2 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-md shadow-md transition duration-300 hover:bg-white/20 flex items-center gap-2">
                  <FaLinkedin className="text-blue-500" /> LinkedIn
                </Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link href="https://github.com/withabhinay" target="_blank" className="px-6 py-2 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-md shadow-md transition duration-300 hover:bg-white/20 flex items-center gap-2">
                  <FaGithub className="text-gray-500" /> GitHub
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="grid bg-black/[0.96] grid-cols-1 gap-6 w-full px-4 justify-center items-center min-h-[200px] md:min-h-[300px] lg:min-h-[400px] pb-10">
        {projectData.map((project, index) => (
          <ProjectCard key={index} title={project.title} githubLink={project.githubLink} liveLink={project.liveLink} imageUrl={project.imageUrl} />
        ))}
        <div className="flex justify-center mt-10 item-center mb-10">
      <NavButton href="/" icon={FaHome} text="Home" color="text-blue-600"/>
      </div>
      </div>

    </div>
  );
}
