## use-screenshot

Simple React hook to take screenshots of a DOM element.

### How to install it.

```bash
npm install use-screenshot
```

or

```bash
yarn add use-screenshot
```

### How to use it.

```js
import { useScreenshot } from "use-screenshot"

function anyReactComponent() {
  const { image, takeScreenShot } = useScreenshot()
  const ref = useRef(null)

  takeScreenShot(ref.current)

  return <div ref={ref}>...</div>
}
```

### API

#### useScreenshot

```js
const { image, takeScreenShot } = useScreenshot()
```

##### image

The image is a base64 string of the screenshot.

##### takeScreenShot

```js
takeScreenShot(element)
```

###### element

The element to take the screenshot of.

##### useScreenshot options

```js
const { image, takeScreenShot } = useScreenshot({
  type: "image/jpeg",
  quality: 0.92
})
```

###### type

The type of the image. Default is `image/png`.

###### quality

The quality of the image. Default is `0.8`.

---

Check `/example` for a working example.

### Contributing

Please feel free to contribute to this project. If you find any bugs or have any suggestions, please open an issue.

### License

MIT
