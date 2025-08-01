import './Login.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authUser } from '../../services/auth'
import { saveAuthToLocalStorage } from '../../utils/authStorage'
const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await authUser(user, password);
            console.log("Login realizado com sucesso:", data);

            saveAuthToLocalStorage({
                token: data.token,
                isAdmin: data.user?.isAdmin ?? data.isAdmin,
                username: data.user?.username ?? data.username,
            });
            console.log(`data é admin: ${data.isAdmin}`);
            const isAdmin = data.user?.isAdmin ?? data.isAdmin;

            if (isAdmin) {
                navigate("/admin-dashboard");
            } else {
                navigate("/user-dashboard");
            }
        } catch {
            throw new Error('Não foi possivel fazer o login.')
        }
    };
    return (
        <div className='login-page'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}>
                <form onSubmit={handleSubmit}>
                    <motion.div
                        whileTap={{ scale: 1.1 }}>
                        <label htmlFor="userLogin">User:</label><br />
                        <input type="text" name='userLogin' id='userLogin' placeholder='Enter with username' value={user} onChange={(e) => setUser(e.target.value)} /><br />
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 1.1 }}>
                        <label htmlFor="passwordLogin">Password:</label><br />
                        <input type="password" name='passwordLogin' id='passwordLogin' placeholder='Enter with your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </motion.div>

                    <p><Link to="/forgotPassword">Forgot password</Link></p> <br />
                    <motion.button
                        type='submit'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                        Login
                    </motion.button>
                </form>
            </motion.div>
        </div>

    )
}
export default Login;