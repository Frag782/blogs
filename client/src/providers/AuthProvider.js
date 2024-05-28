const { createContext, useContext, useState, useEffect } = require("react");
const { API } = require('../utils/const');

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(API + '/auth/status', {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Non authentifié');
            }
        })
        .then(user => setUser(user))
        .catch(() => setUser(null));
    }, []);

    const register = (username, password) => {
        fetch(API + '/register', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
            .then( (response) => console.log(response))
            .catch( (error) => console.log(error));
    }

    const login = (username, password) => {
        fetch(API + '/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
            .then( (response) => response.json())
            .then( (user) => setUser(user))
            .catch( (error) => console.log(error));
    }

    const logout = () => {
        fetch(API + '/logout', {
            method: 'POST',
            credentials: 'include'
        })
            .then( () => { setUser(null); })
    }

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);