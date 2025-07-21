import "./Register.css"
export function RegisterPage() {
    return (
        <div className="register-page">
            <form>
                <div id="header">
                    <h1>Create account</h1>
                </div>
                <div id="area1">
                    <input type="text" name="username" id="username" placeholder="Username"/>
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
                <div id="area2">
                    <input type="email" name="email" id="email" placeholder="E-mail" />
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" /><br /><br />
                    <select name="userLevel" id="userLevel" className="block">
                        <option value="0">User level</option>
                        <option value="1">Administrator</option>
                        <option value="2">User</option>
                    </select>
                </div>
                <footer>
                    <button>Create account</button>
                </footer>
            </form>
        </div>
    )
}