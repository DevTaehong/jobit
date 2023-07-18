"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function NavBarLink({
  href,
  children,
  open,
}: {
  href: string;
  children: React.ReactNode;
  open: boolean;
}) {
  const pathName = usePathname();

  // on mobile, green border-bottom is not shown, on desktop, green border-bottom is shown
  const mobileNoBorderBottom = !open && "border-b ";

  // when a user is on the current page, we want to highlight the link
  const selectedClass =
    pathName === href
      ? "border-solid border-Primary text-Primary font-bold"
      : "font-medium";

  return (
    <Link
      href={href}
      className={`${selectedClass} ${mobileNoBorderBottom} px-0 py-[1.4375rem] text-base not-italic text-Natural6 hover:text-Primary`}
    >
      {children}
    </Link>
  );
}

export default NavBarLink;
