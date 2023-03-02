import styled from "styled-components"

export default function Flashcards() {
    return (
        <div className="questions-container">
            <div className="zap-question-front" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_virar.png" className="zap-vira" alt="zap-vira" data-test="turn-btn"/>
            </div>
            <div className="zap-question-answer" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasdasdasdasdasdasdasdasdsdasdasdasdasd</p>
                <div className="button">
                    <button className="botao1" data-test="no-btn" >Não lembrei</button>
                    <button className="botao2" data-test="partial-btn">Quase não lembrei</button>
                    <button className="botao3" data-test="zap-btn">Zap!</button>
                </div>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
            <div className="zap-questions" data-test="flashcard">
                <p data-test="flashcard-text">dasdasdasd</p>
                <img src="./assets/seta_play.png" className="zap-start" alt="zap-start" data-test="play-btn"/>
            </div>
        </div>
    )
}