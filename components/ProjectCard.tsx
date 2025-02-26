import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

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
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/15 transition duration-300 flex items-center gap-6 w-full max-w-lg mx-auto">
      {/* Project Image */}
      <img src={imageUrl} alt={title} className="w-20 h-20 rounded-xl object-cover" />

      {/* Project Details */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex gap-4 mt-2">
          <Link href={githubLink} target="_blank">
            <FaGithub className="text-gray-300 text-2xl hover:text-white transition" />
          </Link>
          <Link href={liveLink} target="_blank">
            <MdOutlineWeb className="text-gray-300 text-2xl hover:text-white transition" />
          </Link>
        </div>
      </div>
    </div>
  );
};
