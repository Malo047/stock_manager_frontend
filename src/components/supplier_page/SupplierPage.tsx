import "./SupplierPage.css"
type SupplierConfigProps = {
    visivel: boolean,
    id: number,
    nome: string,
    niche: string
}
export function SupplierPage({visivel, id, nome, niche} : SupplierConfigProps){
    if(!visivel) return null
    return(
        <div>
            <h1>pagina de fornecedores {id}{nome}{niche}</h1>
        </div>
    )
}