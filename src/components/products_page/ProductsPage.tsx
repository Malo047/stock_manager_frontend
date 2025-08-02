import "./ProductsPage.css"
type ProductsConfigProps = {
    visivel: boolean,
    id: number,
    name: string,
    quantidade: number,
    valor: number
}
export function ProductsPage({ visivel, id, name, quantidade, valor }: ProductsConfigProps) {
    if (!visivel) return null;
    return (
        <div id="products-page-content">
            <ul>
                
                <li className="products-page-li">
                    {id}
                </li>
            </ul>
            <ul>
                <li className="products-page-li">
                    {name}
                </li>
            </ul>
            <ul>
                <li className="products-page-li">
                    {quantidade}
                </li>
            </ul>
            <ul>
                <li className="products-page-li">
                    R$ {valor}
                </li>
            </ul>
            <ul className="products-page-ul">
                <li className="products-page-li">

                </li>
            </ul>
        </div>
    )
}