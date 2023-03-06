import { useState } from "react";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import "./styles/reset.css"
import "./styles/style.css"


function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <div className="zap-body">
        <div className="top">
          <img src="./assets/logo.png" alt="zaprecall-logo" className="zap-logo"/>
          <h1>ZapRecall</h1>
        </div>       

        <Flashcards count={{contador: contador, setContador: setContador}}/>

        <Footer contador={contador}/>
      </div>    
    </>
  )
}

export default App;
