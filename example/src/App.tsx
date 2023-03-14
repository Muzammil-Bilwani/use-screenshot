import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div></div>
      <h1>Use ScreenShot Example</h1>
      <div className="card">
        <img src={reactLogo} alt="react logo" />
        <img src={reactLogo} alt="react logo" />
        <img src={reactLogo} alt="react logo" />
      </div>
    </div>
  )
}

export default App
