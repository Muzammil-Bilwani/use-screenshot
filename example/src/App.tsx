import { createRef, useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { useScreenshot } from "use-screenshot-react-hook"

function App() {
  const ref = createRef() as any
  const { image, takeScreenShot } = useScreenshot()

  const handleClick = () => {
    takeScreenShot(ref.current)
  }

  return (
    <div className="App">
      <h1>Use ScreenShot Example</h1>

      <div ref={ref} className="card">
        <img src={reactLogo} alt="react logo" />
        <p>Some Text Written</p>
      </div>

      <button className="button" onClick={handleClick}>
        Take Screenshot
      </button>

      {image && (
        <>
          <p>Here is the screenshot</p>
          <img src={image} />{" "}
        </>
      )}
    </div>
  )
}

export default App
