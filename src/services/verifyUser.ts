const urlBase = "http://localhost:3000/users";

export async function verifyUser(user: string) {
    try {
        const response = await fetch(`${urlBase}/${user}`);

        if (!response.ok) {
            if (response.status === 404) {
                console.log("Usuário não existe.");
                return;
            }
            console.log(`Erro: ${response.status}`);
            return;
        }

        const userData = await response.json();
        console.log("Usuário encontrado:", userData);
    } catch (error) {
        console.log("Erro ao verificar usuário:", error);
    }
}
