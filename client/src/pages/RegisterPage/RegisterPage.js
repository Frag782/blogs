import { RegisterForm } from "../../forms/RegisterForm";

export const RegisterPage = () => {
    return (
        <div className='d-flex flex-column justify-content-center' style={{height:'100vh'}}>
            <div className='w-25 mx-auto bg-light p-3'>
                <RegisterForm />
            </div>
        </div>
    )
}