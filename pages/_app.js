import '@/styles/main.css'
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import { IntroContext } from '@/context/intro'
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import Header from '@/components/header';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [introContext, setIntroContext] = useState(false);

  const introEnd = {
    visible: { opacity: '100%' },
    hidden: { opacity: 0 }
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      duration: 0,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.44,
      }
    }
  }
  const introFullEnd = {
    visible: { visibility: 'block' },
    hidden: { visibility: 'hidden' }
  }
  const introMarquee = {
    visible: { y: '100%' },
    hidden: { y: '0%' }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: '100%' }
  }

  return (
    <>
      <DefaultSeo {...SEO} /> 

      { pageProps.preview && (<div className={'fixed bottom-0 left-0 w-auto px-3 py-2 bg-red-600 text-white justify-center flex z-[200] uppercase font-mono text-sm m-3'}>Preview Mode - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click To Exit</a></div>)}
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <LazyMotion features={domAnimation}>
        { !introContext && router.asPath == '/' && (
            <m.div 
              initial="visible"
              animate="hidden"
              variants={introFullEnd}
              transition={{ delay: 4.2, duration: 0, ease: [0.83, 0, 0.17, 1] }}
              cl1assName="fixed inset-0 z-[1000] flex flex-wrap items-end h-screen min-h-screen max-h-screen p-[10px] cursor-wait"
            >
              <m.div 
                initial="visible"
                animate="hidden"
                variants={introEnd}
                transition={{ delay: 3.6, duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
                className="bg-[#D2FC00] fixed inset-0 z-[1000] flex flex-wrap items-end h-screen min-h-screen max-h-screen p-[10px] cursor-wait"
              >
                <m.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <m.svg variants={item} transition={{ duration: 0.3 }} className="w-[33vw] absolute bottom-0 left-0 translate-x-[20vw] translate-y-[12vw]" viewBox="0 0 590 590" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M123.944 295.987c4.372 94.414 84.454 167.408 178.868 163.036 94.414-4.372 167.407-84.454 163.036-178.868l11.83-.547c4.675 100.947-73.371 186.571-174.318 191.245-100.948 4.675-186.572-73.37-191.246-174.318l11.83-.548Z" fill="#131313"/><ellipse cx="227.839" cy="196.921" rx="26.647" ry="72.244" transform="rotate(-2.651 227.839 196.921)" fill="#131313"/><ellipse cx="361.525" cy="190.731" rx="26.647" ry="72.244" transform="rotate(-2.651 361.525 190.731)" fill="#131313"/><path fill-rule="evenodd" clip-rule="evenodd" d="M307.095 564.342c148.972-6.898 264.145-133.255 257.247-282.227C557.444 133.144 431.087 17.97 282.115 24.868 133.144 31.766 17.97 158.124 24.868 307.095c6.898 148.972 133.256 264.145 282.227 257.247Zm.548 11.831c155.505-7.201 275.73-139.1 268.53-294.606-7.201-155.505-139.1-275.73-294.606-268.53-155.505 7.201-275.73 139.1-268.53 294.606 7.201 155.505 139.1 275.73 294.606 268.53Z" fill="#131313"/></m.svg>

                  <m.svg variants={item} transition={{ duration: 0.3 }} className="w-[20vw] absolute bottom-0 left-0 translate-x-[55vw] translate-y-[-33vw] rotate-[-30deg]" viewBox="0 0 590 590" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M123.944 295.987c4.372 94.414 84.454 167.408 178.868 163.036 94.414-4.372 167.407-84.454 163.036-178.868l11.83-.547c4.675 100.947-73.371 186.571-174.318 191.245-100.948 4.675-186.572-73.37-191.246-174.318l11.83-.548Z" fill="#131313"/><ellipse cx="227.839" cy="196.921" rx="26.647" ry="72.244" transform="rotate(-2.651 227.839 196.921)" fill="#131313"/><ellipse cx="361.525" cy="190.731" rx="26.647" ry="72.244" transform="rotate(-2.651 361.525 190.731)" fill="#131313"/><path fill-rule="evenodd" clip-rule="evenodd" d="M307.095 564.342c148.972-6.898 264.145-133.255 257.247-282.227C557.444 133.144 431.087 17.97 282.115 24.868 133.144 31.766 17.97 158.124 24.868 307.095c6.898 148.972 133.256 264.145 282.227 257.247Zm.548 11.831c155.505-7.201 275.73-139.1 268.53-294.606-7.201-155.505-139.1-275.73-294.606-268.53-155.505 7.201-275.73 139.1-268.53 294.606 7.201 155.505 139.1 275.73 294.606 268.53Z" fill="#131313"/></m.svg>

                  <m.svg variants={item} transition={{ duration: 0.3 }} className="w-[13vw] absolute top-0 left-0 translate-x-[10vw] translate-y-[5vw] rotate-[10deg]" viewBox="0 0 590 590" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M123.944 295.987c4.372 94.414 84.454 167.408 178.868 163.036 94.414-4.372 167.407-84.454 163.036-178.868l11.83-.547c4.675 100.947-73.371 186.571-174.318 191.245-100.948 4.675-186.572-73.37-191.246-174.318l11.83-.548Z" fill="#131313"/><ellipse cx="227.839" cy="196.921" rx="26.647" ry="72.244" transform="rotate(-2.651 227.839 196.921)" fill="#131313"/><ellipse cx="361.525" cy="190.731" rx="26.647" ry="72.244" transform="rotate(-2.651 361.525 190.731)" fill="#131313"/><path fill-rule="evenodd" clip-rule="evenodd" d="M307.095 564.342c148.972-6.898 264.145-133.255 257.247-282.227C557.444 133.144 431.087 17.97 282.115 24.868 133.144 31.766 17.97 158.124 24.868 307.095c6.898 148.972 133.256 264.145 282.227 257.247Zm.548 11.831c155.505-7.201 275.73-139.1 268.53-294.606-7.201-155.505-139.1-275.73-294.606-268.53-155.505 7.201-275.73 139.1-268.53 294.606 7.201 155.505 139.1 275.73 294.606 268.53Z" fill="#131313"/></m.svg>

                  <m.svg variants={item} transition={{ duration: 0.3 }} className="w-[11vw] absolute top-0 right-0 translate-x-[-5vw] translate-y-[-2vw] rotate-180" viewBox="0 0 590 590" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M123.944 295.987c4.372 94.414 84.454 167.408 178.868 163.036 94.414-4.372 167.407-84.454 163.036-178.868l11.83-.547c4.675 100.947-73.371 186.571-174.318 191.245-100.948 4.675-186.572-73.37-191.246-174.318l11.83-.548Z" fill="#131313"/><ellipse cx="227.839" cy="196.921" rx="26.647" ry="72.244" transform="rotate(-2.651 227.839 196.921)" fill="#131313"/><ellipse cx="361.525" cy="190.731" rx="26.647" ry="72.244" transform="rotate(-2.651 361.525 190.731)" fill="#131313"/><path fill-rule="evenodd" clip-rule="evenodd" d="M307.095 564.342c148.972-6.898 264.145-133.255 257.247-282.227C557.444 133.144 431.087 17.97 282.115 24.868 133.144 31.766 17.97 158.124 24.868 307.095c6.898 148.972 133.256 264.145 282.227 257.247Zm.548 11.831c155.505-7.201 275.73-139.1 268.53-294.606-7.201-155.505-139.1-275.73-294.606-268.53-155.505 7.201-275.73 139.1-268.53 294.606 7.201 155.505 139.1 275.73 294.606 268.53Z" fill="#131313"/></m.svg>
                </m.div>


                <div className="w-full mt-auto overflow-hidden relative">
                  <m.div
                    initial="visible"
                    animate="hidden"
                    variants={introMarquee}
                    transition={{ delay: 0.1, duration: 0.66, ease: [0.83, 0, 0.17, 1] }}
                    className="w-full"
                  >
                    <div className="block md:hidden">
                      <Marquee gradient={false} speed={350} className="overflow-hidden">
                        <span className="block font-bold leading-[0.85] text-[30vw] md:text-[15vw] md:leading-[0.85] uppercase">Art Director ● Designer ● Art Director ● Designer ● </span>
                      </Marquee>
                    </div>
                    <div className="hidden md:block">
                      <Marquee gradient={false} speed={550} className="overflow-hidden">
                        <span className="block font-bold leading-[0.85] text-[30vw] md:text-[15vw] md:leading-[0.85] uppercase">Art Director ● Designer ● Art Director ● Designer ● </span>
                      </Marquee>
                    </div>
                  </m.div>
                </div>
              </m.div>
            </m.div>
          )}
        </LazyMotion>


        <div className={`transition-colors ease-in-out duration-[550ms] ${router.asPath == '/works' || router.asPath == '/bio' ? 'bg-dark bg-[#D2FC00]' : 'bg-white'}`}>
          <Header/>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </IntroContext.Provider>
    </>
  )
}