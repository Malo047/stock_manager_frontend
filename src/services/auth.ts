export async function authUser(username: string, password: string) {
    const urlBase = 'http://localhost:3000/login';
    try {
        const response = await fetch(urlBase, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.message || 'Erro ao fazer o login.');
        }

        return data;
    } catch {
        throw new Error('Erro ao fazer o login.');
    }
}
