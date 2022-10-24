import Link from "next/link";
import { useState } from "react";
import LocalImage from "@/components/local-image";
import SanityImage from "./sanity-image";

export default function AccordionItem({ href, i, image, heading, isOpen, position, isActive }) {
  const [open, setOpen] = useState(isOpen ? isOpen : false);
  
  function openProjects() {
    setOpen(true)
  }

  function closeProjects() {
    setOpen(false)
  }

  return (
    <Link href={href}>
      <a className={`flex flex-wrap border-t border-black py-[10px] group transition-all ease-in-out duration-[500ms] overflow-visible relative ${ open ? '' : '' }`} onMouseEnter={openProjects} onMouseLeave={closeProjects}>
        <div className={`w-[40.25%] aspect-[16/10] absolute top-0 left-0 z-[10] pointer-events-none transition-opacity ease-in-out duration-[300ms] hidden md:block ${ isActive ? 'opacity-100' : 'opacity-0' }`}>
          <SanityImage
            image={image}
            layout="fill"
            className={`w-full absolute inset-0`}
          />
        </div>

        <div className={`w-full md:w-[45%] mb-[10px] md:mb-0 relative hidden md:block`}>
          <span className="block text-sm absolute top-0 left-0">0{i}</span>
        </div>

        <div className="w-auto md:hidden">
          <span className="block text-sm">0{i}</span>
        </div>

        <div className="flex-1 pl-[10px]">
          <div className="flex w-full items-center">
            <h2 className="uppercase text-[6vw] md:text-[2.5vw] leading-none md:leading-none font-bold flex mb-0 pb-0 relative overflow-hidden w-full">
              <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">{heading}</span>
              <span className="absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full md:group-hover:translate-y-0 flex items-start">
                <span className="block">{heading}</span><span className="block ml-auto">→</span>
              </span>
            </h2>
          </div>
        </div>
      </a>
    </Link>
  )
}