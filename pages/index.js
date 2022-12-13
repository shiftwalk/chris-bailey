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
import Footer from '@/components/footer';

const query = `{
  "work": *[_type == "work"] | order(orderRank asc) {
    title,
    services[],
    year,
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
    setTimeout(() => {
      setIntroContext(true)
    }, 4100);
  },[]);

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
          <article className="px-[10px] pt-[135px]">
            <m.div variants={fade} className="w-full mt-auto overflow-hidden relative border-t border-black pt-[10px]">
              <m.div variants={reveal}>
                <span className="block font-bold leading-[0.95] text-[8.5vw] md:text-[7vw] md:leading-[0.95]">Selected Works</span>
              </m.div>
              <m.div variants={reveal}>
                <span className="block font-normal leading-[0.95] text-[8.5vw] md:text-[7vw] md:leading-[0.95]">19’—22’</span>
              </m.div>
            </m.div>

            <div className="w-full pt-[65vw] md:pt-[35vw] lg:pt-[20vw] xl:pt-[12vw]">
              <ul>
                {work.map((e, i) => {
                  return (
                    <m.li variants={fade} className="block border-t border-black pt-[10px] pb-[20px]" key={i}>
                      <Link href={`/${e.slug.current}`}>
                        <a className="flex md:mb-3">
                          <div className="w-full md:w-[45%] lg:w-[60%]">
                            <m.div variants={reveal}>
                              <div className="block font-bold text-[28px] lg:text-[32px] leading-none">
                                <span className="block">{e.title}</span>
                              </div>
                            </m.div>
                          </div>

                          <div className="ml-auto w-auto hidden lg:flex lg:w-[40%]">
                            <m.div variants={reveal} className="w-1/2 mr-auto">
                              <div className="block font-normal text-xl leading-[1.15]">
                                {e.services.map((e, i) => {
                                  return (
                                    <span className="block" key={i}>{e}</span>
                                  )
                                })}
                              </div>
                            </m.div>
                            <div className="ml-auto w-1/2 flex">
                              <m.div variants={reveal} className="mr-auto">
                                <div className="block font-normal text-xl leading-[1.15]">
                                  <span className="block">{e.year}</span>
                                </div>
                              </m.div>
                              <m.div variants={reveal} className="ml-auto">
                                <div className="block font-normal text-xl leading-[1.15]">
                                  <span className="block underline">View Case</span>
                                </div>
                              </m.div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </m.li>
                  )
                })}
              </ul>
            </div>
          </article>
        </m.main>

        <Footer />
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}