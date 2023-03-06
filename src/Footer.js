import cards from "./cards"

export default function Footer(props) {
    const numeroFinal = cards.length
   

    return (
        <div className="zap-footer" data-test="footer">
            <h2>{props.contador}/{numeroFinal} CONCLUÍDOS</h2>
        </div>
    )
}