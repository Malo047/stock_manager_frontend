import "./ProductsPage.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
type ProductsConfigProps = {
    id: number,
    name: string,
    quantidade: number,
    valor: number,
    tipo: string
}
export function ProductsPage({ id, name, quantidade, valor, tipo }: ProductsConfigProps) {
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
            <ul className="products-page-li">
                <li>
                    {tipo}
                </li>
            </ul>
            <ul className="products-page-ul">
                <li className="products-page-li products-icons">
                    <Link to=""><FontAwesomeIcon icon={faPenToSquare}/></Link>
                    <Link to=""><FontAwesomeIcon icon={faTrashCan}/></Link>
                </li>
            </ul>
        </div>
    )
}