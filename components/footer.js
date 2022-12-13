export default function Footer() {
  let d = new Date()

  let time = new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric', hour12: false }).format(d);

  return (
    <footer className="px-[10px] relative pt-[30vw] md:pt-[15vw] lg:pt-[8vw] overflow-hidden">
      <div className="border-t border-black py-[10px]">
        <div className="flex flex-wrap items-end">
          <div className="w-[50%] lg:w-[60%] hidden lg:block">
            <span className="block"><span className="block">{new Date().getFullYear()}© </span></span>
          </div>

          <nav className="lg:ml-auto w-auto lg:w-[40%]">
            <span className="block w-full md:w-[80%] font-bold leading-[0.95] text-[9vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3vw] md:leading-[0.95] mb-[10vw] lg:mb-[6vw]">Based in the UK Working Worldwide</span>

            <div className="flex w-full">
              <span className="block font-normal mr-auto">Design by CPB© built by ShiftWalk</span>

              <span className="hidden lg:block font-normal ml-auto">{time.replace(' ', '')} GMT</span>
            </div>
          </nav>        
        </div>
      </div>
    </footer>
  )
}