import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'

const Login = () => {

    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleChange = e => {
        setUsername(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setUsername(username)
        navigate('/contact')
    }

    return (
        <div className="form-container" onSubmit={handleSubmit}>

            <form className="ui form">
                <div className="field">
                    <label htmlFor="user-email">Email Address: </label>
                    <input
                        type="text"
                        name="email-address"
                        placeholder="Email Address"
                        value={username}
                        onChange={handleChange}
                    />
                </div>

                <div className="field">
                    <label htmlFor="user-password">Password: </label>
                    <input
                        type="text"
                        name="password"
                        placeholder="Password" />
                </div>

                <button className="ui primary button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
