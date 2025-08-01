import "./AdminConfig.css"
import { Link } from "react-router-dom";
type AdminConfigProps = {
    visivel: boolean;
    onClose: () => void;
};

export function AdminConfig({ visivel, onClose }: AdminConfigProps) {
    if (!visivel) return null;
    return (
        <div id="admin-config-layout">
            <button id="admin-config-exit" onClick={onClose}>X</button>
            <Link to="" className="admin-config-link">Tema</Link>
            <Link to="" className="admin-config-link">Alterar senha</Link>
            <Link to="" className="admin-config-link">Configurações</Link>
            <Link id="logoutButton" to="" style={{
               
            }}>
                Finalizar sessão
            </Link>
        </div>
    );
}
