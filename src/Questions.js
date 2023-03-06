import Answers from "./Answers"
import { useState } from "react"

export default function Questions(props) {
    const [clicked, setClicked] = useState(false) 

    function handleClick() {
        setClicked(true)
    }


    return (
        <> 
            {clicked ? <Answers answer={props.answer} clicked={props.clicked} setConfig={props.setConfig} count={props.count}/> : 
            <div className="zap-question-front" data-test="flashcard">
                <p data-test="flashcard-text">{props.question}</p>
                <img src="./assets/seta_virar.png" className="zap-vira" alt="zap-vira" data-test="turn-btn" onClick={handleClick}/>
            </div>}
        </>
    ) 
}