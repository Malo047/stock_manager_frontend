import "./AdminDashboard.css"
import { Link } from "react-router-dom"
export function AdminDashboard(){
    return(
        <main>
            <header>

            </header>
            <section id="optionsAdmin">
                <Link to="/products" className="Link">Produtos</Link>
                <Link to="/users" className="Link">Usuários</Link>
                <Link to="/supplier" className="Link">Fornecedores</Link>
                <Link to="/general" className="Link">Informções Gerais</Link>
            </section>
            <section id="mainSection">

            </section>
            <footer>
                <p>Conteúdo para fins didáticos.</p>
                <p>Desenvolvido por Marlon Hoffmann.</p>
            </footer>
        </main>
    )
}