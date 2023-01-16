import Link from 'next/link'

export default function Header({ path }) {
  let d = new Date()

  let time = new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric', hour12: false }).format(d);

  return (
    <div className=" fixed top-0 left-0 right-0 z-[100] w-full">
      <header className="m-[10px] pt-[10px] pr-[1px] pb-0 mb-1 top-0 left-0 right-0 z-[100] border-t border-black" id="top">

        <div className="flex flex-wrap font-bold text-[28px] lg:text-[32px] leading-none md:leading-[0.95] lg:leading-[0.95]">
          <div className="w-[35%] md:w-[45%] lg:w-[60%]">
            <Link href="/">
              <a className="block relative overflow-hidden group">
                <span className="block"><span className="block">CPB<span className="font-normal">©</span></span></span>
              </a>
            </Link>
          </div>

          <nav className="ml-auto flex w-[65%] md:w-[55%] lg:w-[40%]">
            <div className="flex space-x-1 lg:space-x-2 w-full md:w-auto justify-end md:justify-start">
              <Link href="/">
                <a className={`block relative overflow-hidden group ${(path.includes('/') && path !== '/bio') ? 'opacity-[1]' : 'opacity-[0.25]' } hover:opacity-[1] transition-opacity ease-in-out duration-300`}>
                  <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-110%]">Works,</span>
                  <span className="absolute inset-0 block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0 translate-y-full">Works,</span>
                </a>
              </Link>

              <Link href="/bio">
                <a className={`block relative overflow-hidden group ${path == '/bio' ? 'opacity-[1]' : 'opacity-[0.25]' } hover:opacity-[1] transition-opacity ease-in-out duration-300`}>
                  <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-110%]">Bio,</span>
                  <span className="absolute inset-0 block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0 translate-y-full">Bio,</span>
                </a>
              </Link>
              
              <a href="mailto:hello@cpbailey.co.uk" className="block relative overflow-hidden group opacity-[0.25] hover:opacity-[1] transition-opacity ease-in-out duration-300">
                <span className="block transition-transform ease-in-out duration-[350ms] md:group-hover:translate-y-[-110%]">Email</span>
                <span className="absolute inset-0 block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0 translate-y-full">Email</span>
              </a>
            </div>

            <span className="hidden md:block font-normal ml-auto">{time.replace(' ', '')} GMT</span>
          </nav>        
        </div>
      </header>
    </div>
  )
}