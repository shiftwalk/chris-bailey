import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { IntroContext } from 'context/intro'
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
    services[],
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
    "prevArticle": *[_type == "work" && (slug.current != $slug) && (orderRank <= ^.orderRank)] | order(orderRank asc)[0]{
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
          <m.article variants={fade} className="px-[10px] pt-[135px]">

            <m.h1 variants={fade} className="w-full mt-auto relative border-t border-black pt-[10px] mb-[55vw] lg:mb-[25vw]">
              <div className="relative overflow-hidden">
                <m.div variants={reveal} className="w-[85%] lg:w-full">
                  <span className="block font-bold leading-[1] text-[7vw] md:text-[4.5vw] lg:text-[3.8vw] md:leading-[1] lg:leading-[1]">{article.title}</span>
                </m.div>
              </div>
              <div className="relative overflow-hidden">
                <m.div variants={reveal} className="w-[85%] lg:w-full">
                  <span className="block font-normal leading-[1.1] text-[7vw] md:text-[4.5vw] lg:text-[3.8vw] md:leading-[1.1] lg:leading-[1.1]">
                    {article.services.slice(0,3).map((e, i) => {
                      return (
                        <span className="inline" key={i}>{e}{i !== 2 ? ', ' : ''}</span>
                      )
                    })}
                  </span>
                </m.div>
              </div>
            </m.h1>

            <div className="w-full order-1 md:order-2 mb-[10px]">
              <div className="relative overflow-hidden aspect-[10/14] md:aspect-[16/10]">
                <SanityImage
                  image={article.teaserImage}
                  layout="fill"
                  sizes="(min-width: 768px) 90vw, 90vw"
                />
              </div>
            </div>

            <div className="mb-[33vw] md:mb-[15vw]">
              <div className="w-full flex flex-wrap border-t border-black lg:mt-6 pt-3 pb-6 lg:pb-12 xl:pb-16">
                <div className="w-full lg:flex-1">
                  <h1 className="text-2xl lg:text-3xl xl:text-3xl">Services</h1>
                </div>
                <div className="w-full lg:w-[38%] content text-lg lg:text-xl font-normal max-w-[700px]">
                  {article.services.map((e, i) => {
                    return (
                      <span className="block mb-0 pb-0 leading-[1.1]" key={i}>{e}</span>
                    )
                  })}
                </div>
              </div>

              <BodyRenderer body={article.imageBlocks} />
              
              <div className="flex">
                {article.prevArticle && (
                  <Link href={`/${article.prevArticle.slug.current}`}>
                    <a className="font-bold leading-[1.1] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3vw] md:leading-[1.1] mr-auto block relative overflow-hidden group">
                      <span className="block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Previous</span>
                      <span className="block absolute inset-0 translate-y-full transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0">Previous</span>
                    </a>
                  </Link>
                )}
                
                {article.nextArticle && (
                  <Link href={`/${article.nextArticle.slug.current}`}>
                    <a className="font-bold leading-[1.1] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3vw] md:leading-[1.1] ml-auto block relative overflow-hidden group">
                      <span className="block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">Next</span>
                      <span className="block absolute inset-0 translate-y-full transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0">Next</span>
                    </a>
                  </Link>
                )}
              </div>
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