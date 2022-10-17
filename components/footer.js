import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer({ noCta }) {
  const footerLogo = useRef(null)
  const isInView = useInView(footerLogo)

  return (
    <footer className="px-[10px] relative pb-[15vw] overflow-hidden">
      <div className="grid grid-cols-12 mb-[20vw] items-end">
        <div className="col-span-12 md:col-span-9 mb-[20vw] md:mb-0 md:pb-[17.5vw]">
          { !noCta && (
            <h2 className="font-bold uppercase text-[25vw] md:text-[10vw] break-words md:break-none leading-[0.85] md:leading-[0.85]">Booking for Q3↘</h2>
          )}
        </div>

        <div className="col-span-12 md:col-span-3">
          <span className="block uppercase lg:text-lg leading-[1.2] lg:leading-[1.2] mb-3">Reach Out</span>

          <a href="mailto:hello@chrisbaileystudio.com" target="_blank" rel="noopener noreferrer" className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative group overflow-hidden md:mb-2">
            <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Email</span>
            <span className="block absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0">Email→</span>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative group overflow-hidden md:mb-2">
            <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">LinkedIn</span>
            <span className="block absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0">LinkedIn→</span>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative group overflow-hidden md:mb-2">
            <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Instagram</span>
            <span className="block absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0">Instagram→</span>
          </a>

          <span className="block lg:text-lg leading-[1.2] lg:leading-[1.2] mt-[5vw] tracking-tight">Designed by <span className="font-bold">CPB</span>© built by <a href="https://shiftwalk.studio" className="font-bold group relative">ShiftWalk <span className="absolute bottom-0 left-0 right-0 w-0 group-hover:w-full transition-all ease-in-out duration-[350ms] bg-black h-[1px] translate-y-[1px]"></span><span className="absolute bottom-0 left-0 right-0 w-0 group-hover:w-full transition-all ease-in-out duration-[350ms] bg-black h-[1px] translate-y-[1px]"></span></a>,<br/>©2022 All Rights Reserved.</span>
        </div>
      </div>
      
      <div ref={footerLogo}>
        <div className={`text-[33vw] md:text-[34vw] absolute bottom-0 left-0 right-0 w-full leading-none md:leading-none translate-x-[1.25vw] md:translate-x-[0.5vw] transition-translate ease-in-out duration-[550ms] delay-75 ${isInView ? 'translate-y-[15vw]' : 'translate-y-[30vw]' }`}>
          <span className="block font-bold">
            <span className="block">CPB<span className="font-medium">©</span></span>
          </span>
        </div>
      </div>
    </footer>
  )
}