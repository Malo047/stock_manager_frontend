import "./AdminDashboard.css"
import { Link } from "react-router-dom"
export function AdminDashboard(){
    return(
        <main className="admin-main">
            <header id="admin-header">
                <div id="admin-logo">

                </div>
                <div id="admin-title">
                    
                </div>
                <div id="admin-profile">

                </div>
            </header>
            <section id="optionsAdmin">
                <Link to="/products" className="Link">Produtos</Link>
                <Link to="/users" className="Link">Usuários</Link>
                <Link to="/supplier" className="Link">Fornecedores</Link>
                <Link to="/general" className="Link">Informções Gerais</Link>
            </section>
            <section id="main-section-admin">

            </section>
            <footer id="footer-admin">
                <p>Conteúdo para fins didáticos.</p>
                <p>Desenvolvido por Marlon Hoffmann.</p>
            </footer>
        </main>
    )
}