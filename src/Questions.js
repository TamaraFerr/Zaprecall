import Answers from "./Answers"
import { useState } from "react"

export default function Questions() {
    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(true)
    }


    return (
        <> 
            {clicked ? <Answers /> : 
            <div className="zap-question-front" data-test="flashcard">
                <p data-test="flashcard-text">ashuahsahsuasasasa</p>
                <img src="./assets/seta_virar.png" className="zap-vira" alt="zap-vira" data-test="turn-btn" onClick={handleClick}/>
            </div>}
        </>
    ) 
}