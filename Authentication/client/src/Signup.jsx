import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let token
        axios.post(`${import.meta.env.VITE_AUTENTICATION_SERVER_URL}/register`, { firstName, lastName, email, password, role })
            .then(result => {
                token = JSON.stringify(result.data)
                let postBody = { "token": (result.data) }
                console.log(result)
                if (result.data !== 'Email already exists') {
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
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName">
                            <strong>First Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            autoComplete="off"
                            name="firstName"
                            className="form-control rounded-0"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName">
                            <strong>Last Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            autoComplete="off"
                            name="lastName"
                            className="form-control rounded-0"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
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
                        <label htmlFor="password">
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
                    <div className="mb-3">
                        <label htmlFor="role">
                            <strong>Role</strong>
                        </label>
                        <select
                            name="role"
                            className="form-control rounded-0"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="Select a role">Select a role</option>
                            <option value="employee">Employee</option>
                            <option value="guest">Guest</option>
                            <option value="admin">Admin</option>
                            <option value="superAdmin">Super Admin</option>
                            <option value="manager">Manager</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p>Already Have an Account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Signup

