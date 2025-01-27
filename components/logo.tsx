import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <ScrollLink
      to="home"
      smooth
      spy
      offset={-120}
      activeClass="active"
      className={cn(
        "flex items-center gap-2 cursor-pointer transition-all duration-300  hover:text-accent",
        className
      )}
    >
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={40}
        height={40}
        className="fill-inherit"
      />
      <span className="text-2xl font-primary font-bold text-primary uppercase">
        ЮК &quot;Феміда&quot;
      </span>
    </ScrollLink>
  );
};
