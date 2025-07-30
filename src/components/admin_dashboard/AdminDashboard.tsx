import "./AdminDashboard.css"
import { Link } from "react-router-dom"

export function AdminDashboard(props: any){
    const username = props.username ?? "Marlon Hoffmann";
    return(
        <main className="admin-main">
            <header id="admin-header">
                <div id="admin-logo">

                </div>
                <div id="admin-title">
                    <h1>Stock Manager </h1>
                </div>
                <div id="admin-profile">
                    <p>{username}</p>
                    
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