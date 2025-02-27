"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProjectCard = ({
  title,
  githubLink,
  liveLink,
  imageUrl,
}: {
  title: string;
  githubLink: string;
  liveLink: string;
  imageUrl: string;
}) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg flex items-center gap-6 w-full max-w-4xl mx-auto cursor-pointer"
      initial={{ opacity: 0, y: 50 }}  // Start faded & pushed down
      whileInView={{ opacity: 1, y: 0 }} // Move into view smoothly
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
    >
      {/* Project Image */}
      <Image src={imageUrl} width={200} height={200} alt={title} className="w-28 h-28 rounded-xl object-cover" />

      {/* Project Details */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex gap-6 mt-3">
          <Link href={githubLink} target="_blank">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-lg flex items-center justify-center transition hover:bg-white/20"
            >
              <FaGithub className="text-gray-300 text-2xl" />
            </motion.div>
          </Link>
          <Link href={liveLink} target="_blank">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-lg flex items-center justify-center transition hover:bg-white/20"
            >
              <MdOutlineWeb className="text-gray-300 text-2xl" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
