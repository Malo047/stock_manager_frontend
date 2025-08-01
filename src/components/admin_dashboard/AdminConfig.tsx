import "./AdminConfig.css"
type AdminConfigProps = {
  visivel: boolean;
};

export function AdminConfig({ visivel }: AdminConfigProps) {
    console.log("AdminConfig foi chamado. visivel:", visivel);
  if (!visivel) return null;

  return (
    <div id="admin-config-layout">
        <p>contato</p>
    </div>
  );
}
