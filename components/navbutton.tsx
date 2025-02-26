import Link from "next/link";
import { FC } from "react";

type SocialLinkProps = {
  href: string;
  icon: React.ElementType;
  text: string;
  color: string;
};

const NavButton: FC<SocialLinkProps> = ({ href, icon: Icon, text, color }) => {
  return (
    <div>
      <Link
        href={href}
        className="px-6 py-2 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-md shadow-md transition duration-300 hover:bg-white/20 hover:backdrop-blur-lg flex items-center gap-2"
      >
        <Icon className={color} /> {text}
      </Link>
    </div>
  );
};

export default NavButton;
