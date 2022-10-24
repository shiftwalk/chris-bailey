import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image';
import { useContext, useEffect, useLayoutEffect } from 'react'
import { IntroContext } from 'context/intro'
import Lenis from '@studio-freight/lenis';
import SanityPageService from '@/services/sanityPageService'
import SanityBlockContent from '@sanity/block-content-to-react'
import BodyRenderer from '@/components/body-renderer'
import SanityImage from '@/components/sanity-image'
import Link from 'next/link'


const query = `{
  "article": *[_type == "work" && slug.current == $slug][0]{
    title,
    orderRank,
    introHeading,
    introText,
    services,
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
    imageBlocks[] {
      ...,
      image {
        asset-> {
          ...
        },
        overrideVideo {
          asset-> {
            ...
          }
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      images[] {
        asset-> {
          ...
        },
        overrideVideo {
          asset-> {
            ...
          }
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      }
    },
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    "nextArticle": *[_type == "work" && (slug.current != $slug) && (orderRank >= ^.orderRank)] | order(orderRank asc)[0]{
      title,
      slug {
        current
      }
    },
    "firstArticle": *[_type == "work"] | order(orderRank asc)[0]{
      title,
      slug {
        current
      }
    },
  },
  "contact": *[_type == "contact"][0]{
    emailAddress,
    instagram,
    linkedIn,
    bookingAvailabilityOverride,
  }
}`

const pageService = new SanityPageService(query)

export default function WorksSlug(initialData) {
  const { data: { article, contact } } = pageService.getPreviewHook(initialData)()
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
      <NextSeo title={article.title} />
      
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
                    <h1 className="uppercase text-[8.5vw] md:text-[5vw] lg:text-[3.55vw] leading-[1] md:leading-[1] lg:leading-[1] font-bold pb-0 mb-[33vw] md:mb-0">{article.introHeading}</h1>
                  </div>

                  <div className="col-span-12 md:col-span-10 lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-10 tracking-tight leading-snug text-sm lg:pl-12 max-w-[450px] lg:ml-auto">
                    <div className="content mb-8">
                      <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={article.introText} />
                    </div>

                    {article.services && (
                      <div className="flex flex-wrap">
                        <div className="w-full lg:w-auto md:pr-24 mb-3 lg:mb-0">
                          <span className="block uppercase text-sm leading-snug">All Services</span>
                          <span className="block uppercase text-sm leading-snug">—</span>
                        </div>
                        <div className="w-full lg:w-auto max-w-[180px]">
                          <span className="block text-sm leading-snug">{article.services}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full order-1 md:order-2 mb-[10px]">
                <div className="relative overflow-hidden aspect-[10/14] md:aspect-[16/10]">
                  <SanityImage
                    image={article.teaserImage}
                    layout="fill"
                    sizes="(min-width: 768px) 90vw, 90vw"
                  />
                </div>
              </div>
            </div>
            <div className="mb-[33vw] md:mb-[15vw]">
              <BodyRenderer body={article.imageBlocks} />
              
              {article.nextArticle ? (
                <Link href={`/works/${article.nextArticle.slug.current}`}>
                  <a className="font-bold uppercase text-[25vw] md:text-[9vw] break-words md:break-none leading-[0.8] md:leading-[0.8] text-right ml-auto block relative overflow-hidden group">
                    <span className="block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Next Project→</span>
                    <span className="block absolute inset-0 translate-y-full transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0">Next Project→</span>
                  </a>
                </Link>
              ) : (
                <Link href={`/works/${article.firstArticle.slug.current}`}>
                  <a className="font-bold uppercase text-[25vw] md:text-[9vw] break-words md:break-none leading-[0.8] md:leading-[0.8] text-right ml-auto block relative overflow-hidden group">
                    <span className="block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Next Project→</span>
                    <span className="block absolute inset-0 translate-y-full transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0">Next Project→</span>
                  </a>
                </Link>
              )}
            </div>
          </m.article>
        </m.main>
        
        <m.div variants={fade}>
          <Footer noCta contact={contact} />
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

// Sanity CMS Props
export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return props
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('work')
  return {
    paths: paths,
    fallback: false,
  };
}