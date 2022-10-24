import { useEffect, useRef, useState } from "react";
import SanityImage from "./sanity-image";

export default function Gif({ images }) {
  const ref = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let speed = 750

    // Set an interval that updates the currentProject every 3 seconds on mobile to rotate the projects
    const i_id = setInterval(() => {
      if (currentImage == (images.length - 1)) {
        // If we hit the cap (5)... Reset...
        setCurrentImage(0)
      } else {
        // Else... Tick along...
        setCurrentImage(currentImage => currentImage+1)
      }
    }, speed);
    return () => {
      clearInterval(i_id);
    }
  },[currentImage]);

  return(
    <div className="relative overflow-hidden">
      {images.map((e, i) => {
        return (
          <div className={`block w-full ${i == 0 ? 'relative' : 'absolute inset-0' } ${i == currentImage ? 'z-[10]' : 'z-[1] opacity-0' }`} ref={ref} key={i}>
            <SanityImage
              image={e}
              focalPoint={e.asset.hotspot}
              layout={i == 0 ? 'responsive' : 'fill' }
              sizes="(min-width: 768px) 80vw, 100vw"
              className="w-full"
            />
          </div>
        )
      })}
    </div>
  )
}