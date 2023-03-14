import { useState } from "react"
import html2canvas from "html2canvas"

/**
 * @params {type} image/jpeg | image/png
 * @params {quality} 0.1 - 1
 * @returns {image} base64 image
 * @returns {takeScreenShot} function to take screenshot
 * @example
 * const { image, takeScreenShot } = useScreenshot()
 * const ref = useRef(null)
 * takeScreenShot(ref.current)
 * <div ref={ref}>...</div>
 */

const useScreenshot = (
  { type, quality } = {
    type: "image/jpeg",
    quality: 0.8
  }
) => {
  const [image, setImage] = useState<string>("")

  const takeScreenShot = async (node: HTMLElement) => {
    const canvas = await html2canvas(node)
    const croppedCanvas = document.createElement("canvas")
    const croppedCanvasContext = croppedCanvas.getContext("2d")
    // init data
    const cropPositionTop = 0
    const cropPositionLeft = 0
    const cropWidth = canvas.width
    const cropHeight = canvas.height

    croppedCanvas.width = cropWidth
    croppedCanvas.height = cropHeight
    croppedCanvasContext?.drawImage(canvas, cropPositionLeft, cropPositionTop)

    const base64Image = croppedCanvas.toDataURL(type, quality)

    setImage(base64Image)
    return base64Image
  }

  return {
    image,
    takeScreenShot
  }
}
export { useScreenshot }
