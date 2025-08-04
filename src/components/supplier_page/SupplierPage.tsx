import "./SupplierPage.css"
type SupplierConfigProps = {
    id: number,
    nome: string,
    niche: string
}
export function SupplierPage({ id, nome, niche}: SupplierConfigProps){
    return(
        <div>
            <h1>pagina de fornecedores {id}{nome}{niche}</h1>
        </div>
    )
}