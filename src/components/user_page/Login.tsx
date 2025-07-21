import './Login.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}>
            <form>
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
        
    )
}
export default Login;