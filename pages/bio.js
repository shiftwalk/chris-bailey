import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Marquee from "react-fast-marquee";
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image';
import { useContext, useEffect, useLayoutEffect } from 'react'
import { IntroContext } from 'context/intro'
import Lenis from '@studio-freight/lenis';
import SanityPageService from '@/services/sanityPageService'
import SanityBlockContent from '@sanity/block-content-to-react';
import SanityImage from '@/components/sanity-image';

const query = `{
  "bio": *[_type == "bio"][0]{
    title,
    aboutText,
    aboutServices[],
    heroImage {
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
  "contact": *[_type == "contact"][0]{
    emailAddress,
    instagram,
    linkedIn,
    bookingAvailabilityOverride,
  }
}`

const pageService = new SanityPageService(query)

export default function Bio(initialData) {
  const { data: { bio, contact } } = pageService.getPreviewHook(initialData)()
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
      <NextSeo title="Bio" />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <article className="px-[10px]">
            <div className="md:h-screen pt-[43vw] md:pt-[15vw] xl:pt-[10vw] mb-[33vw] md:mb-[18vw] flex-col flex overflow-hidden">
              <div className="grid grid-cols-12 col-span-12 flex-1">
                <m.div variants={fade} className="col-span-12 md:col-span-4 relative bg-[#D2FC00] self-end h-full overflow-hidden aspect-[9/12] md:aspect-auto">
                  <SanityImage
                    image={bio.heroImage}
                    layout="fill"
                    className="bg-[#D2FC00] absolute inset-0 w-full h-full object-center object-cover cover-image--top"
                  />
                </m.div>

                <div className="col-span-12 md:col-span-8 flex flex-wrap">
                  <div className="w-full text-right hidden md:block">
                    <div className="">
                      <span className="overflow-hidden relative block md:mb-2">
                        <m.a variants={reveal} href={`mailto:${contact.emailAddress}`} target="_blank" rel="noopener noreferrer" className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative group overflow-hidden">
                          <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Email</span>
                          <span className="block absolute top-0 right-0 bottom-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0">Email→</span>
                        </m.a>
                      </span>
                      
                      <span className="overflow-hidden relative block md:mb-2">
                        <m.a variants={reveal} href={contact.linkedIn} target="_blank" rel="noopener noreferrer" className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative group overflow-hidden">
                          <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">LinkedIn</span>
                          <span className="block absolute top-0 right-0 bottom-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0">LinkedIn→</span>
                        </m.a>
                      </span>

                      <span className="overflow-hidden relative block md:mb-2">
                        <m.a variants={reveal} href={contact.instagram} target="_blank" rel="noopener noreferrer" className="block font-bold text-[6.5vw] md:text-[2.6vw] leading-none md:leading-[0.8] uppercase relative group overflow-hidden">
                          <span className="block transition-translate ease-in-out duration-[350ms] group-hover:translate-y-[-100%]">Instagram</span>
                          <span className="block absolute top-0 right-0 bottom-0 transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0">Instagram→</span>
                        </m.a>
                      </span>
                    </div>
                  </div>

                  <div className="overflow-hidden relative mt-auto">
                    <m.h1 variants={reveal} className="w-full text-[15.5vw] md:text-[11vw] font-bold uppercase leading-[1] md:leading-[0.75] mb-0 pb-0">Biography</m.h1>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden relative col-span-12 self-end">
                <m.div variants={reveal}>
                  <Marquee gradient={false} speed={200} className="overflow-hidden">
                    <span className="block font-bold leading-[0.8] text-[30vw] md:text-[15vw] md:leading-[0.8] uppercase">Art Director ● Art Director ● Art Director ● </span>
                  </Marquee>
                </m.div>
              </div>
            </div>

            <m.div variants={fade} className="pb-[33vw] md:pb-[18vw] grid grid-cols-12">
              <div className="col-span-12 md:col-span-11 lg:col-span-10 md:col-start-2 lg:col-start-3">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-auto md:pr-24 mb-2 md:mb-0">
                    <span className="block uppercase text-sm leading-snug">All Services</span>
                    <span className="block uppercase text-sm leading-snug">—</span>
                  </div>
                  <div className="w-full md:w-auto md:pr-[10vw] mb-10 md:mb-0">
                    {bio.aboutServices.map((e, i) => {
                      return (
                      <span className="block uppercase text-sm leading-snug" key={i}>{e}</span>
                      )
                    })}
                  </div>
                  <div className="w-full md:flex-1">
                    <div className="content content--vw font-bold uppercase text-[4.3vw] md:text-[2.2vw] leading-[1] mb-[3vw]">
                      <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={bio.aboutText} />
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </article>
        </m.main>
        
        <m.div variants={fade} className="">
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