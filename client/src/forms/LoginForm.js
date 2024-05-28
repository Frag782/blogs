import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const onSubmit = (e) => {
        e.preventDefault();
        login(username, password);
        e.target.reset();
    }

    return (
        <form onSubmit={ onSubmit }>

            <div className='my-3'>
                <label className='form-label'>Nom d'utilisateur</label>
                <input className='form-control' type='text' required
                onChange={(e) => { setUsername(e.target.value) }}></input>
            </div>

            <div className='my-3'>
                <label className='form-label'>Mot de passe</label>
                <input className='form-control' type='password' required
                onChange={(e) => { setPassword(e.target.value) }}></input>
            </div>

            <div className='form-group mb-3'>
                <button className='btn btn-success my-3' type='submit'>Connexion</button>
            </div>

            <div className='form-group mb-3'>
                <Link to='/blog'>Retour</Link>
            </div>

        </form>
    )
}