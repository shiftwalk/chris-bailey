import Grid from "./grid";
import SanityImage from "./sanity-image";

export default function ModularDoubleImageBlock({ images }) {
  return (
    <Grid className="gap-3">
      {images.map((e, i) => { 
        return (
          <div className="col-span-12 lg:col-span-5" key={i}>
            <div className="relative aspect-[16/11] overflow-hidden">
              <SanityImage
                image={e}
                focalPoint={e.asset.hotspot}
                layout="fill"
                sizes="(min-width: 768px) 90vw, 90vw"
                className="w-full"
                noCaption
              />
            </div>
          </div>
        )
      })}
    </Grid>
  )
}