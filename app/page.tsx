import { lusitana } from "@/app/ui/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Image
          src="/acme.png"
          width={50}
          height={200}
          className="hidden md:block h-12 w-12"
          alt=""
        />
      </div>

      <div className="grid grid-cols-[40%,60%] h-[35vw]">
        <div className="grid content-center px-[2vw] bg-[#f9fafc]">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <Link href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </Link>
            , brought to you by Vercel.
          </p>
          <a href="/dashboard">
            <div className="bg-blue-500 rounded-lg p-[0.5vw] w-[6vw] h-[2vw] flex gap-[0.5vw] cursor-pointer">
              Log in
              <ArrowRightIcon className="hidden md:block h-6 w-6 text-gray-800" />
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-[#ffffff]">
          <Image
            src="/Dashboard---new-ui.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/Dashboard---new-ui.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </div>
  );
}
