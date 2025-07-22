import "./Register.css"
import { useState } from "react"
import { registerUser } from "../../services/registerUser";
export function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [userLevel, setUserLevel] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        if (password !== confirmPassword) {
            setError('As senhas não coincidem');
            setLoading(false);
            return;
        }

        try {
            const response = await registerUser(username, password, email, userLevel);
            setSuccessMessage('Usuário criado com sucesso!');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setEmail('');
            setUserLevel(0);
            console.log(response)
        } catch {
            setError('Erro ao criar usuário. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="register-page">
            <form onSubmit={handleSubmit}>
                <div id="header">
                    <h1>Create account</h1>
                </div>
                <div id="area1">
                    <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                    <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <div id="area2">
                    <input type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required /><br /><br />
                    <select name="userLevel" id="userLevel" className="block" value={userLevel} onChange={e => setUserLevel(Number(e.target.value))} required>
                        <option value="0">User level</option>
                        <option value="1">Administrator</option>
                        <option value="2">User</option>
                    </select>
                </div>
                <footer>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Criando...' : 'Create account'}
                    </button>
                </footer>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </div>
    )
}