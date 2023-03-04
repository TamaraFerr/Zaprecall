import cards from "./cards"

export default function Footer() {
    const numeroFinal = cards.length
   

    return (
        <div className="zap-footer" data-test="footer">
            <h2>0/{numeroFinal} CONCLUÍDOS</h2>
        </div>
    )
}