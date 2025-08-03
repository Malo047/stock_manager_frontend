import "./HeaderProductsList.css"
type ConfigProps = {
    visivel: boolean
}
export function HeaderProductsList({ visivel }: ConfigProps) {
    if(!visivel) return null
    return (
        <div id="header-products-list-content">
            <ul className="header-products-list-ul">
                ID
            </ul>
            <ul className="header-products-list-ul">
                NAME
            </ul>
            <ul className="header-products-list-ul">
                QUANTIDADE
            </ul>
            <ul className="header-products-list-ul">
                VALOR
            </ul>
            <ul className="header-products-list-ul">
                TIPO
            </ul>
            <ul className="header-products-list-ul">

            </ul>
        </div>

    )
}