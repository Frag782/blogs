import { Link } from "react-router-dom"
import { useAuth } from "../../providers/AuthProvider"

export const NavigationBar = () => {

    const { user, logout } = useAuth();

    // @TODO: changer className de nav-link vers navbar-text etc...

    return (
        <nav className='navbar navbar-expand-lg px-3'>
            <div className='navbar-brand'>
                <Link className='nav-link' to='/blog'>BLOGS</Link>
            </div>
            <ul className='navbar-nav'>
                {
                    user ? (
                        <li className='nav-item'>
                            <button className='nav-link' onClick={logout}>Se déconnecter</button>
                        </li>
                    ) : (
                        <>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/login'>Se connecter</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/register'>S'inscrire</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}