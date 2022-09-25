import Image, { ImageProps } from "next/image"

const Img: React.FC<ImageProps> = ({className, ...props}) => (
  <div className={`relative overflow-hidden ${className}`}>
    <Image
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL="/images/blur.svg"
      {...props}/>
  </div>
)

export default Img