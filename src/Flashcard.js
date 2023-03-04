import { useState } from "react"
import Questions from "./Questions"

export default function Flashcard(props) {
    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(true)
    }

    return (
        <li>
            {clicked ?  <Questions question={props.question} answer={props.answer}/>  :
                <div className="zap-questions" data-test="flashcard">
                    <p data-test="flashcard-text">{`Pergunta ${props.index + 1}`}</p>
                    <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn" onClick={handleClick}/>
                </div>}
        </li>
    )
}