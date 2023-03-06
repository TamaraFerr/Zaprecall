import cards from "./cards"
import Flashcard from "./Flashcard"

export default function Flashcards(props) {


    return (
        <ul className="questions-container">
            {cards.map((card, index) =>
                <Flashcard 
                key={index} 
                index={index}
                question={card.question}
                answer={card.answer}
                count={props.count}
                />
            )}
        </ul>
    )
}

