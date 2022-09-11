import Image, { ImageProps } from "next/image"

const Img: React.FC<ImageProps> = ({...props}) => (
  <Image
    layout="fill"
    objectFit="cover"
    placeholder="blur"
    blurDataURL="/images/blur.svg"
    {...props}/>
)

export default Img