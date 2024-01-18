import React from 'react';
import { Link } from 'react-scroll';

const NavLink = ({ children, to, offset = 0, mobileMenu = false }) => {
  const className = mobileMenu
    ? 'text-lg text-black  cursor-pointer  hover:text-[#896d54]    '
    : 'text-lg text-[#7b73f2] xlg:text-xl  cursor-pointer   hover:bg-clip-text  hover:text-[#a5a0ff]  ';

  return (
    <Link
      to={to}
      smooth={true}
      spy={true}
      offset={offset}
      duration={1000}
      className={className}
    >
      {children}
    </Link>
  );
};

export default NavLink;
