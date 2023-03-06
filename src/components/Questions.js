import Answers from "./Answers"
import { useState } from "react"
import styled from "styled-components"

export default function Questions(props) {
    const [clicked, setClicked] = useState(false) 

    function handleClick() {
        setClicked(true)
    }


    return (
        <> 
            {clicked ? <Answers answer={props.answer} clicked={props.clicked} setConfig={props.setConfig} count={props.count}/> : 
            <Question data-test="flashcard">
                <p data-test="flashcard-text">{props.question}</p>
                <Icon src="./assets/seta_virar.png" alt="zap-vira" data-test="turn-btn" onClick={handleClick}/>
            </Question>}
        </>
    ) 
}

const Question = styled.div `
    margin-top: 25px;
    width: 100%;
    height: 131px;
    background-color: #FFFFD4;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    
    p {
        margin-top: 18px;
    }
`

const Icon = styled.img `
    width: 30px;
    height: 20px;
    margin-top: 50px;
    margin-left: 254px;
`