import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../forms/LoginForm"
import { useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider";

export const LoginPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect( () => {
        if (user) navigate('/blog')
    }, [user, navigate]);

    return (
        <div className='d-flex flex-column justify-content-center' style={{height:'100vh'}}>
            <div className='w-25 mx-auto bg-light p-3'>
                <LoginForm />
            </div>
        </div>
    )
}