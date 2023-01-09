import Gif from "./gif";
import SanityImage from "./sanity-image";

export default function ModularSingleImageBlock({ images }) {
  return (
    <>
    {images.length == 1 ? (
      <SanityImage
        image={images[0]}
        focalPoint={images[0].asset.hotspot}
        layout="responsive"
        sizes="(min-width: 768px) 90vw, 90vw"
        className="w-full"
        noCaption
      />
    ) : (
      <Gif images={images} />
    )}
    </>
  )
}