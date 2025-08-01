import "./ProductsPage.css"
type ProductsConfigProps =  {
    visivel: boolean
}
export function ProductsPage({visivel}: ProductsConfigProps){
    if(!visivel) return null;
    return(
        <>
        <h1>Produtos</h1>
        </>
    )
}