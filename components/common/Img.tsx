import clsx from "clsx";
import Image, { ImageProps } from "next/image"
import { useState } from "react";

const Img: React.FC<ImageProps> = ({className, ...props}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <Image
        fill={true}
        className={clsx(
          isLoading
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100'
        )}
        onLoadingComplete={() => setLoading(false)}
        {...props}/>
    </div>
  )
}

export default Img