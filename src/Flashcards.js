import cards from "./cards"
import Flashcard from "./Flashcard"

export default function Flashcards() {


    return (
        <ul className="questions-container">
            {cards.map((card, index) =>
                <Flashcard key={index} card={card} index={index}/>
            )}
        </ul>
    )
}

