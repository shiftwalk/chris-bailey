import Layout from '@/components/layout'
import Header from '@/components/header'
import Marquee from "react-fast-marquee";
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link';
import { useContext, useEffect, useLayoutEffect } from 'react'
import { IntroContext } from 'context/intro'
import Lenis from '@studio-freight/lenis';

export default function Works() {
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
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
      <NextSeo title="Works" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <article className="px-[10px] pt-[43vw] md:pt-[15vw] xl:pt-[10vw] max-h-screen h-screen flex flex-col">
            <div className="w-full mt-auto overflow-hidden relative">
              <m.div variants={reveal}>
                <Marquee gradient={false} speed={200} className="overflow-hidden mt-auto w-full">
                  <span className="block font-bold leading-[0.8] text-[60vw] md:text-[16vw] md:leading-[0.8] uppercase">All Works ● All Works ● All Works ● </span>
                </Marquee>
              </m.div>
            </div>

            <div className="w-full mt-auto">
              <div className="grid grid-cols-12 mt-auto">
                <div className="col-span-12 md:col-span-5 md:col-start-8">
                  <ul>
                    <li className="block">
                      <Link href="/works-slug">
                        <a className="block overflow-hidden relative md:mb-3 group">
                          <m.div variants={reveal}>
                            <div className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative overflow-hidden">
                              <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">In Conversations With</span>
                              <span className="flex absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0"><span className="block">In Conversations With</span><span className="block ml-auto">→</span></span>
                            </div>
                          </m.div>
                        </a>
                      </Link>
                    </li>

                    <li className="block mb-1">
                      <Link href="/works-slug">
                        <a className="block overflow-hidden relative md:mb-3 group">
                          <m.div variants={reveal}>
                            <div className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative overflow-hidden">
                              <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Sindaya Jewellery</span>
                              <span className="flex absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0"><span className="block">Sindaya Jewellery</span><span className="block ml-auto">→</span></span>
                            </div>
                          </m.div>
                        </a>
                      </Link>
                    </li>

                    <li className="block mb-1">
                      <Link href="/works-slug">
                        <a className="block overflow-hidden relative md:mb-3 group">
                          <m.div variants={reveal}>
                            <div className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative overflow-hidden">
                              <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Soteriors</span>
                              <span className="flex absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0"><span className="block">Soteriors</span><span className="block ml-auto">→</span></span>
                            </div>
                          </m.div>
                        </a>
                      </Link>
                    </li>

                    <li className="block mb-1">
                      <Link href="/works-slug">
                        <a className="block overflow-hidden relative md:mb-3 group">
                          <m.div variants={reveal}>
                            <div className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative group overflow-hidden ">
                              <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Simply Plan</span>
                              <span className="flex absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0"><span className="block">Simply Plan</span><span className="block ml-auto">→</span></span>
                            </div>
                          </m.div>
                        </a>
                      </Link>
                    </li>

                    <li className="block mb-1">
                      <Link href="/works-slug">
                        <a className="block overflow-hidden relative md:mb-3 group">
                          <m.div variants={reveal}>
                            <div className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative overflow-hidden">
                              <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">STX.Swiss</span>
                              <span className="flex absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0"><span className="block">STX.Swiss</span><span className="block ml-auto">→</span></span>
                            </div>
                          </m.div>
                        </a>
                      </Link>
                    </li>

                    <li className="block mb-1">
                      <Link href="/works-slug">
                        <a className="block overflow-hidden relative md:mb-3 group">
                          <m.div variants={reveal}>
                            <div className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative overflow-hidden">
                              <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Crypto Valley Festival</span>
                              <span className="flex absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0"><span className="block">Crypto Valley Festival</span><span className="block ml-auto">→</span></span>
                            </div>
                          </m.div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
