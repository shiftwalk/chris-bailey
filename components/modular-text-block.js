import BlockContent from '@sanity/block-content-to-react';

export default function ModularTextBlock({ heading, text }) {
  return (
    <div className="w-full flex flex-wrap border-t border-black lg:mt-6 pt-3 pb-6 lg:pb-12 xl:pb-16">
      <div className="w-full lg:flex-1">
        <h1 className="text-2xl lg:text-3xl xl:text-3xl">{heading}</h1>
      </div>
      <div className="w-full lg:w-[38%] content text-lg lg:text-xl font-normal max-w-[700px]">
        <BlockContent serializers={{ container: ({ children }) => children }} blocks={text} />
      </div>
    </div>
  )
}