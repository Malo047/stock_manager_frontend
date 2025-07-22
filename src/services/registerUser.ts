export async function registerUser(username: string, password: string, email: string, userLevel: number){
    const urlBase = "https://localhost:3000/register";
    try {
        const response = await fetch(`${urlBase}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                email,
                userLevel
            })
        });
        if(!response.ok){
            throw new Error('Erro ao criar usuário');
        }
        return response.json();
    } catch (error) {
        console.log(error)
        throw error;
    }
};