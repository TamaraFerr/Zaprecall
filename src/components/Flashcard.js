import { useState } from "react"
import Questions from "./Questions"

export default function Flashcard(props) {
    const [clicked, setClicked] = useState(false)

    const [config, setConfig] = useState({
        classe:"", 
        icon: "./assets/seta_play.png" , 
        teste: "play-btn",
        desabilitado: false, 
    })

    function handleClick() {

        if(config.desabilitado === false){
            setClicked(true)
        }
    }

    return (
        <li>
            {clicked ?  <Questions question={props.question} answer={props.answer} clicked={setClicked} index={props.index} setConfig={setConfig} count={props.count}/>  :
                <div className={`zap-questions ${config.classe}`} data-test="flashcard">
                    <p data-test="flashcard-text">{`Pergunta ${props.index + 1}`}</p>
                    <img src={config.icon} className="zap-start" alt="zap-start" data-test={config.teste} onClick={handleClick}/>
                </div>}
        </li>
    )
}
