import "./EditPage.css"
export function EditPage(){
    return(
        <div id="edit-page-main" className="exclude-overlay">
            <form action="">
                <label htmlFor="username-edit"></label>
                <input type="text" id="username-edit" />
                <label htmlFor="email-edit"></label>
                <input type="email" id="email-edit"/>
            </form>
        </div>
    )
}