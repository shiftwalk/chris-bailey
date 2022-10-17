import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Marquee from "react-fast-marquee";
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image';
import { useContext, useEffect, useLayoutEffect } from 'react'
import { IntroContext } from 'context/intro'
import Lenis from '@studio-freight/lenis';

export default function WorksSlug() {
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
      <NextSeo title="Work Slug" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.article variants={fade} className="px-[10px] pt-[43vw] md:pt-[30vw] xl:pt-[20vw]">
            <div className="flex flex-wrap mb-6 md:mb-0">
              <div className="w-full order-2 md:order-1 md:mb-6">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-10 lg:col-span-7 xl:col-span-8 mb-6 lg:mb-0">
                    <h1 className="uppercase text-[8.5vw] md:text-[5vw] lg:text-[3.55vw] leading-[1] md:leading-[1] lg:leading-[1] font-bold pb-0 mb-[33vw] md:mb-0">Soteriors, penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo.</h1>
                  </div>

                  <div className="col-span-12 md:col-span-10 lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-10 tracking-tight leading-snug text-sm lg:pl-12 max-w-[450px] lg:ml-auto">
                    <p className="mb-4">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                    <p className="mb-10">Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>

                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-auto md:pr-24 mb-3 lg:mb-0">
                        <span className="block uppercase text-sm leading-snug">All Services</span>
                        <span className="block uppercase text-sm leading-snug">—</span>
                      </div>
                      <div className="w-full lg:w-auto max-w-[180px]">
                        <span className="block text-sm leading-snug">Art Direction, Visual Identity, Brand Guidelines, Logo Design, Interaction Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full order-1 md:order-2 mb-[10px]">
                <LocalImage src={'/images/hero.jpg'} width={2200} height={1430} />
              </div>
            </div>
            <div className="mb-[33vw] md:mb-[15vw]">
              <div className="grid grid-cols-2 gap-[10px]">
                <div className="col-span-2">
                  <LocalImage src={'/images/work-slug.jpg'} width={2000} height={1313} />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <LocalImage src={'/images/work-slug.jpg'} width={2000} height={1313} />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <LocalImage src={'/images/work-slug.jpg'} width={2000} height={1313} />
                </div>
                <div className="col-span-2">
                  <LocalImage src={'/images/work-slug.jpg'} width={2000} height={1313} />
                </div>
                <div className="col-span-2">
                  <LocalImage src={'/images/work-slug.jpg'} width={2000} height={1313} />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <LocalImage src={'/images/work-slug.jpg'} width={2000} height={1313} />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <LocalImage src={'/images/work-slug.jpg'} width={2000} height={1313} />
                </div>
              </div>
              
              <h2 className="font-bold uppercase text-[25vw] md:text-[9vw] break-words md:break-none leading-[1] md:leading-[1] text-right">Next Project→</h2>
            </div>
          </m.article>
        </m.main>
        
        <m.div variants={fade}>
          <Footer noCta />
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
