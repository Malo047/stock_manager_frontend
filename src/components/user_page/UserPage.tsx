import "./UserPage.css"
type UserConfigProps =  {
    visivel: boolean
}
export function UserPage({visivel}: UserConfigProps){
    if(!visivel) return null;
    return(
        <>
        <h1>Pagina de usuarios</h1>
        </>
    )
}