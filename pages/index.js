import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Marquee from "react-fast-marquee";
import FancyLink from '@/components/fancyLink'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image';
import Link from 'next/link';
import { useContext, useEffect, useLayoutEffect } from 'react'
import { IntroContext } from 'context/intro'
import Lenis from '@studio-freight/lenis';

export default function Home() {
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 4100);
  },[]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    const lenis = new Lenis({
      smooth: true,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net/en#easeOutExpo
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
  <Layout>
      <NextSeo title="Home" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <article className="px-[10px] pt-[43vw] md:pt-[15vw] xl:pt-[10vw]">
            <m.div variants={fade}>
              <LocalImage src={'/images/hero.jpg'} width={2200} height={1430} />
            </m.div>

            <div className="overflow-hidden relative mb-[33vw] md:mb-[18vw]">
              <m.div variants={reveal}>
                <div className="block md:hidden">
                  <Marquee gradient={false} speed={150} className="overflow-hidden">
                    <span className="block font-bold leading-[1] text-[30vw] md:text-[15vw] md:leading-[1] uppercase">Based in the UK (GMT) Working Worldwide ● Based in UK (GMT) Working Worldwide</span>
                  </Marquee>
                </div>
                <div className="hidden md:block">
                  <Marquee gradient={false} speed={350} className="overflow-hidden">
                    <span className="block font-bold leading-[1] text-[30vw] md:text-[15vw] md:leading-[1] uppercase">Based in the UK (GMT) Working Worldwide ● Based in UK (GMT) Working Worldwide</span>
                  </Marquee>
                </div>
              </m.div>
            </div>

            <m.div variants={fade} className="mb-[33vw] md:mb-[18vw] grid grid-cols-12">
              <div className="col-span-12 md:col-span-9 md:col-start-4">
                <span className="block uppercase mb-[10px] text-sm">All Works</span>
                <ul>
                  <li>
                    <Link href="/works-slug">
                      <a className="flex flex-wrap border-t border-black py-[10px] group" onclick="lenis.scrollTo('#top')">
                        <div className="w-full md:w-[45%] mb-[10px] md:mb-0">
                          <LocalImage src={'/images/works-teaser.jpg'} width={1122} height={726} />
                        </div>
                        <div className="w-auto md:hidden">
                          <span className="block text-sm">01</span>
                        </div>
                        <div className="flex-1 pl-[10px]">
                          <h2 className="uppercase text-[6vw] md:text-[2.5vw] leading-none md:leading-none font-bold flex mb-0 pb-0 relative overflow-hidden">
                            <span className="block transition-transform ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">in Conversations With</span>
                            <span className="absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0 flex">
                              <span className="block">in Conversations With</span><span className="block ml-auto">→</span>
                            </span>
                          </h2>
                        </div>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/works-slug">
                      <a className="flex flex-wrap border-t border-black py-[10px] group">
                        <div className="w-auto md:w-[45%]">
                          <span className="block text-sm">02</span>
                        </div>
                        <div className="flex-1 pl-[10px]">
                          <h2 className="uppercase text-[6vw] md:text-[2.5vw] leading-none md:leading-none font-bold flex mb-0 pb-0 relative overflow-hidden">
                            <span className="block transition-transform ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Sindaya Jewellery</span>
                            <span className="absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0 flex">
                              <span className="block">Sindaya Jewellery</span><span className="block ml-auto">→</span>
                            </span>
                          </h2>
                        </div>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/works-slug">
                      <a className="flex flex-wrap border-t border-black py-[10px] group">
                        <div className="w-auto md:w-[45%]">
                          <span className="block text-sm">03</span>
                        </div>
                        <div className="flex-1 pl-[10px]">
                          <h2 className="uppercase text-[6vw] md:text-[2.5vw] leading-none md:leading-none font-bold flex mb-0 pb-0 relative overflow-hidden">
                            <span className="block transition-transform ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Soteriors</span>
                            <span className="absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0 flex">
                              <span className="block">Soteriors</span><span className="block ml-auto">→</span>
                            </span>
                          </h2>
                        </div>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/works-slug">
                      <a className="flex flex-wrap border-t border-black py-[10px] group">
                        <div className="w-auto md:w-[45%]">
                          <span className="block text-sm">04</span>
                        </div>
                        <div className="flex-1 pl-[10px]">
                          <h2 className="uppercase text-[6vw] md:text-[2.5vw] leading-none md:leading-none font-bold flex mb-0 pb-0 relative overflow-hidden">
                            <span className="block transition-transform ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Simply Plan</span>
                            <span className="absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0 flex">
                              <span className="block">Simply Plan</span><span className="block ml-auto">→</span>
                            </span>
                          </h2>
                        </div>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/works-slug">
                      <a className="flex flex-wrap border-t border-black py-[10px] group">
                        <div className="w-auto md:w-[45%]">
                          <span className="block text-sm">05</span>
                        </div>
                        <div className="flex-1 pl-[10px]">
                          <h2 className="uppercase text-[6vw] md:text-[2.5vw] leading-none md:leading-none font-bold flex mb-0 pb-0 relative overflow-hidden">
                            <span className="block transition-transform ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">STX.Swiss</span>
                            <span className="absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0 flex">
                              <span className="block">STX.Swiss</span><span className="block ml-auto">→</span>
                            </span>
                          </h2>
                        </div>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/works-slug">
                      <a className="flex flex-wrap border-t border-black py-[10px] group">
                        <div className="w-auto md:w-[45%]">
                          <span className="block text-sm">06</span>
                        </div>
                        <div className="flex-1 pl-[10px]">
                          <h2 className="uppercase text-[6vw] md:text-[2.5vw] leading-none md:leading-none font-bold flex mb-0 pb-0 relative overflow-hidden">
                            <span className="block transition-transform ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Crypto Valley Festival</span>
                            <span className="absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0 flex">
                              <span className="block">Crypto Valley Festival</span><span className="block ml-auto">→</span>
                            </span>
                          </h2>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </m.div>

            <m.div variants={fade} className="md:px-[10vw] mb-[33vw] md:mb-[18vw]">
              <span className="block uppercase mb-5 text-sm">About</span>
              <p className="uppercase text-[5.3vw] md:text-[3.5vw] leading-[1]">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            </m.div>
          </article>
        </m.main>
        
        <m.div variants={fade}>
          <Footer />
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
