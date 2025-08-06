import "./ExcludeUser.css"
type ConfigExcludeProps = {
    username: string,
    closeConfirm: () => void
}
export function ExcludeUser({ closeConfirm, username }: ConfigExcludeProps) {
    return (
        <div id="exclude-main-content">
            <div id="exclude-confirm-up">
                <p>Deseja realmente excluir o usuário? <br />{username}</p>
            </div>
            <div id="exclude-confirm-down">
                <button onClick={closeConfirm}>Cancelar</button>
                <button onClick={closeConfirm}>Confirmar</button>
            </div>
        </div>
    )
}