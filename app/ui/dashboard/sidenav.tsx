"use client";

import Image from "next/image";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "users", href: "/dashboard/users", icon: UserGroupIcon },
  {
    name: "invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Sign out",
    href: "/",
    icon: ArrowLeftIcon,
  },
];

export default function Page() {
  const pathname = usePathname();

  return (
    <div className="grid size-full grid-rows-5 gap-1">
      <div className="bg-blue-400 w-full">
        <Image
          src="/Acme.png"
          width={50}
          height={200}
          className="hidden md:block h-10 w-15 top-[7.5vw] absolute"
          alt=""
        />
      </div>

      {links.map((link) => (
        <div key={link.name} className="px-[2vw] py-[1vw] h-[3vh]">
          <Link
            href={link.href}
            className={
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" +
              (pathname === link.href ? " bg-sky-100 text-blue-600" : "")
            }
          >
            <link.icon className="h-6 w-6" />
            {link.name}
          </Link>
        </div>
      ))}
      
    </div>
  );
}
