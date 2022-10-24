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
import SanityPageService from '@/services/sanityPageService'

const query = `{
  "work": *[_type == "work"] | order(orderRank asc) {
    title,
    slug {
      current
    }
  },
}`

const pageService = new SanityPageService(query)

export default function Works(initialData) {
  const { data: { work } } = pageService.getPreviewHook(initialData)()
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
                    {work.map((e, i) => {
                      return (
                        <li className="block m-1" key={i}>
                          <Link href={`works/${e.slug.current}`}>
                            <a className="block overflow-hidden relative md:mb-3 group">
                              <m.div variants={reveal}>
                                <div className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.85] uppercase relative overflow-hidden">
                                  <span className="block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">{e.title}</span>
                                  <span className="flex absolute inset-0 transition-translate ease-in-out duration-[350ms] translate-y-full md:group-hover:translate-y-0"><span className="block">{e.title}</span><span className="block ml-auto">→</span></span>
                                </div>
                              </m.div>
                            </a>
                          </Link>
                        </li>
                      )
                    })}
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

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}