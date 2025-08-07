import "./ExcludeUser.css"
type ConfigExcludeProps = {
    username: string,
    message: string,
    closeConfirm: () => void
}
export function ExcludeUser({ closeConfirm, username, message}: ConfigExcludeProps) {
    return (
        <div id="confirm-pop-up-main" className="exclude-overlay">
            <div id="confirm-up">
                <p>{message} <br />{username}</p>
            </div>
            <div id="confirm-down">
                <button onClick={closeConfirm}>Cancelar</button>
                <button onClick={closeConfirm}>Confirmar</button>
            </div>
        </div>
    )
}