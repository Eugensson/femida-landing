import Link from "next/link";

import { socialList } from "@/constants";

import { cn } from "@/lib/utils";

export const Socials = ({ className }: { className?: string }) => {
  return (
    <ul
      className={cn(
        "flex items-center justify-center gap-6 md:gap-12 lg:gap-12",
        className
      )}
    >
      {socialList.map(({ icon: Icon, href, label }) => (
        <li
          key={label}
          className="flex items-center gap-4"
          aria-label={`Link to ${label}`}
        >
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Icon size={28} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
