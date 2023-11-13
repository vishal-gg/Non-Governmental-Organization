import { getPlaiceholder } from "plaiceholder";

export const generateBase64Data = async (src) => {
  try {
    const response = await fetch(src)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`)
    }
    const buffer = Buffer.from(await response.arrayBuffer())
    const { base64 } = await getPlaiceholder(buffer)

    return { base64 }

  } catch (err) {
    console.log(err)
    return { base64: null }
  }
}
