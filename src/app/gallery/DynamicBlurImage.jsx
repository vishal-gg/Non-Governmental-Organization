import Image from "next/image";
// import { generateBase64Data } from "../../utils/generateBase64Data";

const DynamicBlurImage = ({ src }) => {
  
  // const { base64 } = await generateBase64Data(src)
  // if (!base64) return null

  return (
    <Image
      src={src}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt="image"
      // placeholder="blur"
      // blurDataURL={base64}
      style={{ objectFit: "cover" }}
    />
  )
}

export default DynamicBlurImage;
