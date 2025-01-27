import { Link as ScrollLink } from "react-scroll";

import { navLinks } from "@/constants";

export const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-6 text-lg text-primary font-semibold">
        {navLinks.map(({ name, href }) => (
          <li key={name}>
            <ScrollLink
              to={href}
              smooth
              spy
              offset={-120}
              activeClass="active"
              className="cursor-pointer transition-all duration-300 hover:text-accent"
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
