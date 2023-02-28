import Flashcards from "./Flashcards";
import "./styles/reset.css"
import "./styles/style.css"

function App() {
  return (
    <>
      <div className="zap-body">
        <div className="top">
          <img src="./assets/logo.png" alt="zaprecall-logo" className="zap-logo"/>
          <h1>ZapRecall</h1>
        </div>       

        <Flashcards />

        <div className="zap-footer">
          <h2>0/4 CONCLUÍDOS</h2>
        </div>
      </div>    
    </>
  )
}

export default App;
