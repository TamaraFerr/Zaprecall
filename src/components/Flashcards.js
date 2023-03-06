import cards from "./cards"
import Flashcard from "./Flashcard"
import styled from "styled-components"

export default function Flashcards(props) {


    return (
        <ContainerQuestions>
            {cards.map((card, index) =>
                <Flashcard 
                key={index} 
                index={index}
                question={card.question}
                answer={card.answer}
                count={props.count}
                />
            )}
        </ContainerQuestions>
    )
}

const ContainerQuestions = styled.ul `
    display: flex;
    flex-direction: column;
    margin-top: 27px;
    margin-bottom: 90px;
    box-sizing: border-box;
    width: 300px;
`