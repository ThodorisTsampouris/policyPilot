import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let token
        axios.post(`${import.meta.env.VITE_AUTENTICATION_SERVER_URL}/login`, { email, password })
            .then(result => {
                console.log(result)
                token = JSON.stringify(result.data)
                let postBody = { "token": (result.data) }
                console.log(postBody)
                console.log('RESULTT DATA', result.data)
                if (result.data !== 'Email or password incorrect') {
                    console.log(result.data)
                    document.cookie = token.slice(1, -1)
                    window.location.href = `${import.meta.env.VITE_MAIN_APPLICATION_CLIENT_URL}/home`
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Login