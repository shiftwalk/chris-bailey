import Link from "next/link";
import Gif from "@/components/gif";
import SanityImage from "./sanity-image";

export default function Teaser({ images, slug }) {
  return images.length == 1 ? (
    <Link href={`/works/${slug}`}>
      <a className="block w-full group overflow-hidden relative">
        <SanityImage
          image={images[0]}
          focalPoint={images[0].asset.hotspot}
          layout="responsive"
          sizes="(min-width: 768px) 80vw, 100vw"
          className="w-full"
        />
      </a>
    </Link>
  ) : (
    <Link href={`/works/${slug}`}>
      <a className="block">
        <Gif images={images} />
      </a>
    </Link>
  )
}