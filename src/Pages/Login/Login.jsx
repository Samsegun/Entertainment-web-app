import { useEffect } from "react";
import FormContainer from "Components/FormContainer";
import InputUI from "Components/InputUI";

const Login = props => {
    useEffect(() => {
        props.setShowNavSearch(false);
    }, [props]);

    return (
        <FormContainer
            heading='Login'
            account="Don't have an account?"
            accountAction='Sign Up'
            action='Login to your account'
            destination='/signup'>
            <InputUI type='email' placeholder='Email address' />
            <InputUI type='password' placeholder='Password' />
        </FormContainer>
    );
};

export default Login;
