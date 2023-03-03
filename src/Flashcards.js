import styled from "styled-components"
import cards from "./cards"
import Questions from "./Questions"
import { useState } from "react"

export default function Flashcards() {
    const [openQuest, setOpenQuest] = useState(false);

    const openQuestion = () => {
        setOpenQuest(true)
    };


    return (
        <div className="questions-container">
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn" onClick={openQuestion}/>
                {openQuest && < Questions/>}
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
        </div>
    )
}