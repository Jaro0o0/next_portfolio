"use client";

import { usePathname } from "next/navigation";

function ScrollLink({ href, children, className, onClick, ...props }) {
  const pathname = usePathname();
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  const targetPath = href.slice(0, hashIndex) || "/";
  const sectionId = href.slice(hashIndex + 1);

  const handleClick = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    if (pathname === targetPath) {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}

export default ScrollLink;
