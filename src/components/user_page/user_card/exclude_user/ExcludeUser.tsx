import "./ExcludeUser.css"
type ConfigExcludeProps = {
    closeConfirm: () => void
}
export function ExcludeUser({closeConfirm}:ConfigExcludeProps){
    return(
        <div>
            <h1>
                excluir usuario
            </h1>
            <button onClick={closeConfirm}>X</button>
        </div>
    )
}