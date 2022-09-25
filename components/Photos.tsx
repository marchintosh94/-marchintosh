import Img from "./common/Img"
import image from "../assets/photos/marcobaratto_young.png"
import image0 from "../assets/photos/marcobaratto_beach.png"
import image1 from "../assets/photos/marcobaratto_workstation.png"
import image2 from "../assets/photos/marcobaratto_dogs.png"
import clsx from "clsx"

const Photos = () => {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <section className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      {[image2, image, image1, image0].map((image, imageIndex) => (
        <div
          key={image.src}
          className={clsx(
            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
            rotations[imageIndex % rotations.length]
          )}
        >
          <Img
            src={image}
            alt="marcobaratto"
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
    </section>
  )
}

export default Photos