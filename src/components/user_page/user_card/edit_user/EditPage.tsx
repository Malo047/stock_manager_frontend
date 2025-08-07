import "./EditPage.css"
export function EditPage(){
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
                <button>Cancelar</button>
                <button type="submit">Editar</button>
            </form>
        </div>
    )
}