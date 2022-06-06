import { useEffect } from "react";
import FormContainer from "Components/FormContainer";
import InputUI from "Components/InputUI";

const Signup = props => {
    useEffect(() => {
        props.setShowNavSearch(false);
    }, [props]);

    return (
        <FormContainer
            heading='Sign Up'
            account='Already have an account?'
            accountAction='Login'
            action='Create an account'
            destination='/login'>
            <InputUI type='email' placeholder='Email address' />
            <InputUI type='password' placeholder='Password' />
            <InputUI type='password' placeholder='Repeat Password' />
        </FormContainer>
    );
};

export default Signup;
