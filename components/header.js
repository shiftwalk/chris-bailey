import Link from 'next/link'
import Marquee from 'react-fast-marquee';

export default function Header() {
  let d = new Date()

  let time = new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric' }).format(d);

  return (
    <header className="p-[10px] pb-0 mb-1 absolute top-0 left-0 right-0 z-[100]" id="top">
      <div className="flex md:hidden flex-wrap font-bold uppercase text-[10vw] md:text-[3vw] lg:text-[2.5vw] leading-none md:leading-none mb-[20vw] md:mb-0 lg:leading-[0.95">
        <Link href="/">
          <a className="block md:hidden">
            <span className="block">CPB© </span>
          </a>
        </Link>

        <span className="block md:hidden ml-auto">{time.replace(' ', '')}</span>
      </div>
      <div className="flex flex-wrap font-bold uppercase text-[10vw] md:text-[3vw] lg:text-[2.5vw] leading-none md:leading-[0.95] lg:leading-[0.95">
        <Link href="/">
          <a className="hidden md:block relative overflow-hidden group">
            <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Christopher Bailey</span>
            <div className="absolute inset-0 w-full translate-y-full md:group-hover:translate-y-0 transition-transform ease-in-out duration-[350ms]">
              <Marquee gradient={false} speed={100} className="overflow-hidden">
                <span className="block">Art Director — Designer — Art Director — Designer — Art Director — Designer —</span>
              </Marquee>
            </div>
          </a>
        </Link>

        <nav className="ml-auto flex md:space-x-[2.25vw] w-full md:w-auto">
          <div className="flex space-x-3 md:space-x-2">
            <Link href="/works">
              <a className="block relative overflow-hidden group">
                <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Works<span className="font-medium text-[4.75vw] md:text-[1.5vw] leading-none md:leading-none align-top hidden md:inline">06</span><span className="font-medium">,</span></span>
                <span className="absolute inset-0 block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0 translate-y-full">Works<span className="font-medium text-[4.75vw] md:text-[1.5vw] leading-none md:leading-none align-top hidden md:inline">06</span><span className="font-medium">,</span></span>
              </a>
            </Link>

            <Link href="/bio">
              <a className="block relative overflow-hidden group">
                <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Bio<span className="font-medium">,</span></span>
                <span className="absolute inset-0 block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0 translate-y-full">Bio<span className="font-medium">,</span></span>
              </a>
            </Link>
            
            <a href="mailto:hello@chrisbaileystudio.com" className="block relative overflow-hidden group">
              <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Email</span>
              <span className="absolute inset-0 block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0 translate-y-full">Email</span>
            </a>
          </div>

          <span className="hidden md:block">{time.replace(' ', '')} GMT</span>
        </nav>
      </div>
    </header>
  )
}