import Link from 'next/link'
import Marquee from 'react-fast-marquee';

export default function Header() {
  let d = new Date()

  let time = new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric', hour12: false }).format(d);

  return (
    <header className="m-[10px] pt-[10px] pr-[1px] pb-0 mb-1 absolute top-0 left-0 right-0 z-[100] border-t border-black" id="top">

      <div className="flex flex-wrap font-bold text-[28px] lg:text-[32px] leading-none md:leading-[0.95] lg:leading-[0.95]">
        <div className="w-[35%] md:w-[45%] lg:w-[60%]">
          <Link href="/">
            <a className="block relative overflow-hidden group">
              <span className="block"><span className="block">CPB© </span></span>
            </a>
          </Link>
        </div>

        <nav className="ml-auto flex w-[65%] md:w-[55%] lg:w-[40%]">
          <div className="flex space-x-1 lg:space-x-2 w-full md:w-auto justify-end md:justify-start">
            <Link href="/">
              <a className="block relative overflow-hidden group">
                <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Works,</span>
                <span className="absolute inset-0 block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0 translate-y-full">Works,</span>
              </a>
            </Link>

            <Link href="/bio">
              <a className="block relative overflow-hidden group">
                <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Bio,</span>
                <span className="absolute inset-0 block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0 translate-y-full">Bio,</span>
              </a>
            </Link>
            
            <a href="mailto:hello@chrisbaileystudio.com" className="block relative overflow-hidden group">
              <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Email</span>
              <span className="absolute inset-0 block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0 translate-y-full">Email</span>
            </a>
          </div>

          <span className="hidden md:block font-normal ml-auto">{time.replace(' ', '')} GMT</span>
        </nav>        
      </div>
    </header>
  )
}