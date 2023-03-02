import { useState } from "react";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import "./styles/reset.css"
import "./styles/style.css"


function App() {
  const [answer, setAnswer] = useState("")
  const [finished, setFinished] = useState("")

  return (
    <>
      <div className="zap-body">
        <div className="top">
          <img src="./assets/logo.png" alt="zaprecall-logo" className="zap-logo"/>
          <h1>ZapRecall</h1>
        </div>       

        <Flashcards />

        <Footer />
      </div>    
    </>
  )
}

export default App;
