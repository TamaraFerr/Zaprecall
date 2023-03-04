import cards from "./cards"

export default function Footer() {
    const numeroFinal = cards.length
    const numeroInicial = numeroFinal

    return (
        <div className="zap-footer" data-test="footer">
            <h2>{numeroInicial}/{numeroFinal} CONCLUÍDOS</h2>
        </div>
    )
}