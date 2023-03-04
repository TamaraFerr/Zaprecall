

export default function Answers(props) {



    return (
        <div className="zap-question-answer" data-test="flashcard">
            <p data-test="flashcard-text">{props.answer}</p>
            <div className="button">
                <button className="botao1" data-test="no-btn" >Não lembrei</button>
                <button className="botao2" data-test="partial-btn">Quase não lembrei</button>
                <button className="botao3" data-test="zap-btn">Zap!</button>
            </div>
        </div>
    )
}