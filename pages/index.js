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
import ReactCursorPosition from 'react-cursor-position';
import AccordionItem from '@/components/accordion-item';
import SanityPageService from '@/services/sanityPageService'
import Gif from '@/components/gif';

const query = `{
  "home": *[_type == "home"][0]{
    title,
    aboutText,
    heroImages[] {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "work": *[_type == "work"] | order(orderRank asc){
    title,
    teaserImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0]{
    emailAddress,
    instagram,
    linkedIn,
    bookingAvailabilityOverride,
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home, work, contact } } = pageService.getPreviewHook(initialData)()
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
      <NextSeo title={home.title} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <article className="px-[10px] pt-[43vw] md:pt-[15vw] xl:pt-[10vw]">
            <m.div variants={fade}>
              <Gif 
                images={home.heroImages}
              />
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
                <ul className="border-b border-black">
                  {work.map((e, i) => {
                    return (
                      <li key={i}>
                        <ReactCursorPosition>
                          <AccordionItem 
                            href={`works/${e.slug.current}`}
                            image={e.teaserImage}
                            i={i + 1}
                            heading={e.title}
                            isOpen
                          />
                        </ReactCursorPosition>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </m.div>

            <m.div variants={fade} className="md:px-[10vw] mb-[33vw] md:mb-[18vw]">
              <span className="block uppercase mb-5 text-sm">About</span>
              <p className="uppercase text-[5.3vw] md:text-[3.5vw] leading-[1]">{home.aboutText}</p>
            </m.div>
          </article>
        </m.main>
        
        <m.div variants={fade}>
          <Footer contact={contact} />
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}