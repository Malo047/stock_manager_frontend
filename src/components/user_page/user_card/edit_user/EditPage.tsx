import "./EditPage.css"
type ConfigEditProps = {
    closeMessage: () => void
}
export function EditPage({closeMessage}: ConfigEditProps){
    return(
        <div id="edit-page-main" className="exclude-overlay">
            
            <form action="">
                <input type="text" id="username-edit" placeholder="Username"/><br />
                <input type="email" id="email-edit" placeholder="E-mail"/><br />
                <label htmlFor="user-level-edit">User level:</label>
                <select name="user-level" id="user-level-edit">
                    <option value="null">Selecione</option>
                    <option value="1">Administrator</option>
                    <option value="2">User</option>
                </select><br />
                <button onClick={closeMessage}>Cancelar</button>
                <button>Editar</button>
            </form>
        </div>
    )
}