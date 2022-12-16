import Layout from '@/components/layout'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from 'context/intro'
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
  const [hoveringProjects, setHoveringProjects] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  function updateProject(e) {
    setHoveringProjects(true)
    setActiveProject(e)
  }
  
  function resetProject() {
    setHoveringProjects(false)
    setActiveProject(0)
  }

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
              <div className="relative overflow-hidden">
                <m.div variants={reveal}>
                  <span className="block font-bold leading-[0.95] text-[8.5vw] md:text-[7vw] md:leading-[0.95]">Selected Works</span>
                </m.div>
              </div>
              <div className="relative overflow-hidden">
                <m.div variants={reveal}>
                  <span className="block font-normal leading-[0.95] text-[8.5vw] md:text-[7vw] md:leading-[0.95]">19’—22’</span>
                </m.div>
              </div>
            </m.div>

            <div className="w-full pt-[65vw] md:pt-[35vw] lg:pt-[20vw] xl:pt-[12vw]">
              <ul>
                {work.map((e, i) => {
                  let activeState = 'opacity-[0.25]'
                  let activeBorder = 'border-t border-black/30'

                  if (i == activeProject && hoveringProjects) {
                    activeState = 'opacity-[1]'
                    activeBorder = 'border-t border-black'
                  } 
                  if (!hoveringProjects) {
                    activeState = 'opacity-[1]'
                    activeBorder = 'border-t border-black'
                  }

                  return (
                    <m.li
                      variants={fade}
                      className={`mb-0 pb-0 block transition-colors ease-in-out duration-[350ms] ${activeBorder}`}
                      key={i}
                      onMouseEnter={()=> updateProject(i)}
                      onMouseLeave={()=> resetProject()}
                    >
                      <Link href={`/${e.slug.current}`}>
                        <a className={`pt-[10px] pb-[40px] flex transition-opacity ease-in-out duration-[350ms] ${activeState}`}>
                          <div className="w-full md:w-[45%] lg:w-[60%]">
                            <div className="block font-bold text-[28px] lg:text-[32px] leading-none">
                              <div className="relative overflow-hidden">
                                <m.div variants={reveal}>
                                  <span className="block">{e.title}</span>
                                </m.div>
                              </div>
                            </div>
                          </div>

                          <div className="ml-auto w-auto hidden lg:flex lg:w-[40%]">
                            <div className="w-1/2 mr-auto">
                              <div className="block font-normal text-xl leading-[1.15]">
                                {e.services.map((e, i) => {
                                  return (
                                    <div className="overflow-hidden relative" key={i}>
                                      <m.div variants={reveal} className="w-1/2 mr-auto">
                                        <span className="block">{e}</span>
                                      </m.div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                            <div className="ml-auto w-1/2 flex">
                              <div className="mr-auto">
                                <div className="block font-normal text-xl leading-[1.15]">
                                  <div className="relative overflow-hidden">
                                    <m.div variants={reveal}>
                                      <span className="block">{e.year}</span>
                                    </m.div>
                                  </div>
                                </div>
                              </div>
                              <div className="ml-auto">
                                <div className="block font-normal text-xl leading-[1.15]">
                                  <div className="relative overflow-hidden">
                                    <m.div variants={reveal}>
                                      <span className="block underline">View Case</span>
                                    </m.div>
                                  </div>
                                </div>
                              </div>
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
          
          <m.div variants={fade}>
            <Footer />
          </m.div>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}