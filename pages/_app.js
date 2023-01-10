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

  let bodyColor = 'bg-white'

  if (router.asPath == '/') {
    bodyColor = 'bg-[#D3C9C0] selection:bg-black selection:text-[#D3C9C0]'
  } else if (router.asPath == '/bio') {
    bodyColor = 'bg-[#D3C9C0] selection:bg-black selection:text-[#D3C9C0]'
  }

  return (
    <>
      <DefaultSeo {...SEO} /> 

      { pageProps.preview && (<div className={'fixed bottom-0 left-0 w-auto px-3 py-2 bg-red-600 text-white justify-center flex z-[200] uppercase font-mono text-sm m-3'}>Preview Mode - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click To Exit</a></div>)}
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <div className="hidden lg:block">
          <LazyMotion features={domAnimation}>
          { !introContext && router.asPath == '/' && (
              <m.div 
                initial="visible"
                animate="hidden"
                variants={introFullEnd}
                transition={{ delay: 2.2, duration: 0, ease: [0.83, 0, 0.17, 1] }}
                cl1assName="fixed inset-0 z-[1000] flex flex-wrap items-end h-screen min-h-screen max-h-screen p-[10px] cursor-wait"
              >
                <m.div 
                  initial="visible"
                  animate="hidden"
                  variants={introEnd}
                  transition={{ delay: 1, duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
                  className="bg-[#6F808A] fixed inset-0 z-[1000] flex flex-wrap items-end h-screen min-h-screen max-h-screen p-[10px] cursor-wait"
                >
                  <div className="w-full mt-auto overflow-hidden relative">
                    <m.div
                      initial="visible"
                      animate="hidden"
                      variants={introMarquee}
                      transition={{ delay: 0.1, duration: 0.55, ease: [0.83, 0, 0.17, 1] }}
                      className="w-full"
                    >
                      <svg className="w-full" viewBox="0 0 1710 478" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M306.275 180.45H423.926C413.056 74.2276 346.558 0 221.874 0C77.3681 0 0 100.463 0 240.6C0 376.897 73.5316 478 218.677 478C344.64 478 413.695 401.213 423.926 296.27H306.275C298.602 347.462 278.141 383.936 216.758 383.936C140.669 383.936 117.651 325.066 117.651 238.68C117.651 152.934 140.669 94.0642 216.758 94.0642C277.502 94.0642 297.963 130.538 306.275 180.45Z" fill="#131313" fill-opacity="0.8"/>
                        <path d="M443.038 467.762H558.131V302.029H664.912C760.183 302.029 819.648 252.118 819.648 156.134C819.648 60.1499 760.183 10.2383 664.912 10.2383H443.038V467.762ZM558.131 207.965V104.303H638.057C677.7 104.303 701.997 117.74 701.997 156.134C701.997 194.527 677.7 207.965 638.057 207.965H558.131Z" fill="#131313" fill-opacity="0.8"/>
                        <path d="M837.546 467.762H1065.81C1160.45 467.762 1222.47 430.008 1222.47 332.744C1222.47 264.276 1181.55 232.281 1133.59 223.963V222.683C1171.32 209.885 1204.56 181.73 1204.56 125.419C1204.56 47.3521 1154.69 10.2383 1059.42 10.2383H837.546V467.762ZM952.639 195.167V104.303H1029.37C1061.34 104.303 1086.91 111.981 1086.91 149.735C1086.91 187.489 1061.34 195.167 1029.37 195.167H952.639ZM952.639 373.697V265.556H1032.56C1080.52 265.556 1104.82 276.434 1104.82 319.307C1104.82 362.179 1080.52 373.697 1032.56 373.697H952.639Z" fill="#131313" fill-opacity="0.8"/>
                        <path d="M1472.78 476.08C1616.01 476.08 1710 382.656 1710 239.32C1710 95.344 1616.01 1.91965 1472.78 1.91965C1328.27 1.91965 1233.64 95.344 1233.64 239.32C1233.64 382.656 1328.27 476.08 1472.78 476.08ZM1472.78 442.166C1351.93 442.166 1272.65 362.179 1272.65 239.32C1272.65 115.821 1351.93 35.834 1472.78 35.834C1591.71 35.834 1671 115.821 1671 239.32C1671 362.179 1591.71 442.166 1472.78 442.166ZM1477.26 383.936C1546.95 383.936 1590.43 339.783 1594.91 280.913H1557.82C1553.98 307.789 1534.16 347.462 1474.7 347.462C1407.56 347.462 1382.62 297.55 1382.62 239.32C1382.62 181.09 1407.56 130.538 1474.7 130.538C1532.25 130.538 1552.71 170.212 1556.54 192.608H1593.63C1586.59 138.217 1543.75 94.0642 1473.42 94.0642C1391.58 94.0642 1342.98 154.854 1342.98 239.32C1342.98 324.426 1392.85 383.936 1477.26 383.936Z" fill="#131313" fill-opacity="0.8"/>
                        </svg>
                    </m.div>
                  </div>
                </m.div>
              </m.div>
            )}
          </LazyMotion>
        </div>


        <div className={`transition-colors ease-in-out duration-[550ms] ${bodyColor}`}>
          <Header path={router.asPath} />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </IntroContext.Provider>
    </>
  )
}