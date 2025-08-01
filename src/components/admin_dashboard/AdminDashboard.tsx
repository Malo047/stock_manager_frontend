import "./AdminDashboard.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { AdminConfig } from "./AdminConfig";
import { useState } from "react";
import { ProductsPage } from "../products_page/ProductsPage";
import { UserPage } from "../user_page/UserPage";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AdminDashboard(props: any) {
    const username = props.username ?? "Marlon Hoffmann";
    const [openConfig, setOpenconfig] = useState(false);
    const [openProductsPage, setOpenProductsPage] = useState(false);
    const [openUsersPage, setOpenUserspage] = useState(false);

    const showConfig = () => {
        setOpenconfig(!openConfig);
    };
    const showProductsPage = () =>{
        setOpenUserspage(false);
        setOpenProductsPage(!openProductsPage);
    };
    const showUserspage = () =>{
        setOpenProductsPage(false);
        setOpenUserspage(!openUsersPage);
    };

    return (
        <main className="admin-main">
            <header id="admin-header">
                <div id="admin-logo">

                </div>
                <div id="admin-title">
                    <h1>Stock Manager </h1>
                </div>
                <div id="admin-profile">
                    <p style={{
                        maxWidth: "160px", whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{username}</p>
                    <p id="admin-icon-user"><FontAwesomeIcon icon={faCircleUser} /></p>
                    <p id="admin-icon-bars" style={{ fontSize: "25px", cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faBars} onClick={showConfig} />
                    </p>
                    <AdminConfig visivel={openConfig} onClose={() => setOpenconfig(false)} />
                    
                </div>
            </header>
            <section id="optionsAdmin">
                <Link to="/admin-dashboard" className="Link" onClick={showProductsPage}>Produtos</Link>
                <Link to="/admin-dashboard" className="Link" onClick={showUserspage}>Usuários</Link>
                <Link to="/supplier" className="Link">Fornecedores</Link>
                <Link to="/general" className="Link">Informções Gerais</Link>
            </section>
            <section id="main-section-admin">
                    <ProductsPage visivel={openProductsPage}/>
                    <UserPage visivel={openUsersPage}/>
            </section>
            <footer id="footer-admin">
                <p>Conteúdo para fins didáticos.</p>
                <p>Desenvolvido por Marlon Hoffmann.</p>
            </footer>
        </main>
    )
}