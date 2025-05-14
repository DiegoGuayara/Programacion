import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <main className="mainLogin">
            <div className="contLogin">
                <h1>Login</h1>
                <p className="subtitle">Login with your email and password.</p>

                <form className="contInputs">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />

                    <button type="submit">Login</button>
                </form>

                <div className="footerLogin">
                    <p>
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}