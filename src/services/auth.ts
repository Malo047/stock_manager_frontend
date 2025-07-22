export async function authUser(username: string, password: string){
    const urlBase = 'http://localhost:3000/login';
    try{
        const response = await fetch(`${urlBase}`,{
            method: 'POST', 
            headers: {
                'Content-Type': 'apllication/JSON'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        if(!response.ok){
            throw new Error('Erro ao fazer o login.')
        }
        return response.json();
    }catch{
        throw new Error('Erro ao fazer o login.');
    }
}