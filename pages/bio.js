import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade, reveal, scale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useContext, useEffect } from 'react'
import { IntroContext } from 'context/intro'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import SanityImage from '@/components/sanity-image';
import Link from 'next/link'

const query = `{
  "bio": *[_type == "bio"][0]{
    title,
    aboutText,
    aboutServices[],
    awards[] {
      title,
      location
    },
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
    heroImageMobile {
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
    socials[] {
      name,
      url
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Bio(initialData) {
  const { data: { bio, contact, colors } } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

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
          <m.article variants={fade} className="px-[10px] pt-[135px]">
            <div className="flex flex-wrap border-t border-black pt-[10px] mb-[35vw] md:mb-[30px]">
              <div className="w-full md:w-[45%] lg:w-[60%]">
                <m.h1 variants={fade} className="w-full mt-auto relative">
                  <div className="relative overflow-hidden">
                    <m.div variants={reveal} className="w-[85%] lg:w-full">
                      <span className="block font-bold leading-[1.075] text-[7vw] md:text-[4.5vw] lg:text-[3.8vw] md:leading-[1.075] lg:leading-[1.075]">Christopher Bailey</span>
                    </m.div>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.div variants={reveal} className="w-[85%] lg:w-full">
                      <span className="block font-normal leading-[1.075] text-[7vw] md:text-[4.5vw] lg:text-[3.8vw] md:leading-[1.075] lg:leading-[1.075]">Designer, Art Director</span>
                    </m.div>
                  </div>
                </m.h1>
              </div>

              <div className="w-full md:w-[55%] lg:w-[40%] hidden md:block">
                <div className="content text-lg lg:text-xl font-normal w-[99%] pt-[5px]">
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={bio.aboutText} />
                </div>
              </div>
            </div>

            <m.div variants={fade} className="w-full relative mb-[10px] md:mb-[20px]">
              <div className="relative overflow-hidden bg-black">
                <m.div variants={scale} className="bg-black">
                  <SanityImage
                    image={bio.heroImage}
                    className="w-full bg-black hidden md:block"
                  />
                  <SanityImage
                    image={bio.heroImageMobile}
                    className="w-full bg-black md:hidden"
                  />
                </m.div>
              </div>
            </m.div>

            <div className="w-full md:w-[55%] lg:w-[40%] block md:hidden mb-[30px]">
              <div className="content text-lg lg:text-xl font-normal w-[99%] pt-[5px]">
                <p>There's a power in creativity that can drive real commercial results. As a successful art director, I build strong, timeless and flexible brand identities by bringing together imagination, technical skill and keen business awareness. It's not just about designing something that looks good. I shape brand identities that add value and support return on investment. I use visual storytelling techniques to forge an emotional connection between your brand and your customers. Your brand identity supports your business as it navigates change and is a strong foundation for trend-led campaigns. Hiring me to consult on your brand means you're investing in a fresh - and experienced - pair of eyes. As an imaginative creative, I'm proud to be a maker and a storyteller. I use inventive creativity and design skills to get to the heart of your brand and communicate it in a distinctive and engaging way. I apply the latest insights to challenge pre-existing ideas and unlock inspired new ways of thinking and doing.</p>
                  
                <p>When you commission me to craft your brand identity, you free yourself up to do what you do best. You can feel confident that you've entrusted your brand - and budget - to a seasoned professional who'll deliver lasting recognition. As a time-served professional, I'll always treat you, your clients and team members with courtesy and respect. Let's talk about how we can build a future-proof brand that really delivers. Whether you're a start-up or an established organisation, launching something new or wanting to reboot a tired brand, get in touch.</p>
              </div>
            </div>

            <div className="w-full">
              <ul>
                <m.li variants={fade} className="block border-t border-black pt-[10px] pb-[20px]">
                  <span className="flex flex-wrap md:mb-3">
                    <div className="w-full md:w-[45%] lg:w-[60%] mb-[10px] md:mb-0">
                      <m.div variants={reveal}>
                        <div className="block font-bold text-[28px] lg:text-[32px] leading-none">
                          <span className="block">Contact</span>
                        </div>
                      </m.div>
                    </div>
        
                    <div className="ml-auto w-full block md:w-[55%] lg:w-[40%]">
                      <div className="flex w-full">
                        <m.div variants={reveal} className="w-1/2 mr-auto">
                          <div className="block font-normal text-xl leading-[1.15]">
                            <span className="block">Email</span>
                          </div>
                        </m.div>
                        <div className="ml-auto w-1/2 flex">
                          <div className="relative overflow-hidden">
                            <m.div variants={reveal} className="ml-auto">
                              <div className="block font-normal text-xl leading-[1.15]">
                                <a href={`mailto:${contact.emailAddress}`} className="block underline hover:opacity-40 transition-opacity ease-in-out duration-300">{contact.emailAddress}</a>
                              </div>
                            </m.div>
                          </div>
                        </div>
                      </div>

                      {contact.socials.map((e, i) => {
                        return (
                          <div className="flex w-full" key={i}>
                            <m.div variants={reveal} className="w-1/2 mr-auto">
                              <div className="block font-normal text-xl leading-[1.15]">
                                <span className="block">{e.name}</span>
                              </div>
                            </m.div>
                            <div className="ml-auto w-1/2 flex">
                              <div className="relative overflow-hidden">
                                <m.div variants={reveal} className="ml-auto">
                                  <div className="block font-normal text-xl leading-[1.15]">
                                    <a href={e.url} target="_blank" rel="noopener noreferrer" className="block underline hover:opacity-40 transition-opacity ease-in-out duration-300">/{e.url.substring(e.url.lastIndexOf('/') + 1)}</a>
                                  </div>
                                </m.div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </span>
                </m.li>

                <m.li variants={fade} className="block border-t border-black pt-[10px] pb-[20px]">
                  <span className="flex flex-wrap md:mb-3">
                    <div className="w-full md:w-[45%] lg:w-[60%] mb-[10px] md:mb-0">
                      <m.div variants={reveal}>
                        <div className="block font-bold text-[28px] lg:text-[32px] leading-none">
                          <span className="block">Services</span>
                        </div>
                      </m.div>
                    </div>
        
                    <div className="ml-auto w-full block md:w-[55%] lg:w-[40%]">
                      <div className="flex w-full relative overflow-hidden">
                        <m.div variants={reveal} className="w-1/2 mr-auto">
                          <div className="block font-normal text-xl leading-[1.15]">
                            <span className="block">{bio.aboutServices[0]}</span>
                          </div>
                        </m.div>
                        <div className="ml-auto w-1/2 flex">
                          <div className="relative overflow-hidden">
                            <m.div variants={reveal} className="ml-auto">
                              <div className="block font-normal text-xl leading-[1.15]">
                                <Link href="/">
                                  <a className="block underline hover:opacity-40 transition-opacity ease-in-out duration-300">View Cases</a>
                                </Link>
                              </div>
                            </m.div>
                          </div>
                        </div>
                      </div>


                      {bio.aboutServices.slice(1).map((e, i) => {
                        return (
                          <div className="flex w-full" key={i}>
                            <div className="relative overflow-hidden">
                              <m.div variants={reveal} className="w-full mr-auto">
                                <div className="block font-normal text-xl leading-[1.15]">
                                  <span className="block">{e}</span>
                                </div>
                              </m.div>
                            </div>
                          </div>
                        )
                      })}
                    
                    </div>
                  </span>
                </m.li>
                
                {bio.awards?.length > 0 && (
                  <m.li variants={fade} className="block border-t border-black pt-[10px] pb-[20px]">
                    <span className="flex flex-wrap md:mb-3">
                      <div className="w-full md:w-[45%] lg:w-[60%] mb-[10px] md:mb-0">
                        <m.div variants={reveal}>
                          <div className="block font-bold text-[28px] lg:text-[32px] leading-none">
                            <span className="block">Awards</span>
                          </div>
                        </m.div>
                      </div>
                      
                      <div className="ml-auto w-full block md:w-[55%] lg:w-[40%]">
                        {bio.awards.map((e, i) => {
                          return (
                            <div className="flex w-full" key={i}>
                              <div className="relative overflow-hidden">
                                <m.div variants={reveal} className="w-full mr-auto">
                                  <div className="block font-normal text-xl leading-[1.15]">
                                    <span className="block leading-[1.15]">{e.location}</span>
                                  </div>
                                </m.div>
                              </div>
                              <div className="ml-auto w-1/2 flex">
                                <div className="relative overflow-hidden">
                                  <m.div variants={reveal} className="ml-auto">
                                    <div className="block font-normal text-xl leading-[1.15]">
                                      <span className="block leading-[1.15]">{e.title}</span>
                                    </div>
                                  </m.div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </span>
                  </m.li>
                )}
              </ul>
            </div>
          </m.article>
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