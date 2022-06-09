import { useEffect, useRef } from "react";
import FormContainer from "Components/FormContainer";
import InputUI from "Components/InputUI";
import { useDispatch, useSelector } from "react-redux";
import { validateFormActions } from "ReduxStore/formValidation";

const Login = props => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const formState = useSelector(state => state.validateForm);
    const dispatch = useDispatch();

    const emailHandler = () => {
        dispatch(
            validateFormActions.validateLoginEmail(emailRef.current.value)
        );
    };

    const passwordHandler = () => {
        dispatch(
            validateFormActions.validateLoginPassword(passwordRef.current.value)
        );
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        dispatch(validateFormActions.disableButtonOnSubmit());
    };

    useEffect(() => {
        props.setShowNavSearch(false);
    }, [props]);

    return (
        <FormContainer
            heading='Login'
            account="Don't have an account?"
            accountAction='Sign Up'
            action='Login to your account'
            destination='/signup'
            isDisabled={formState.submitLoginButtonDisabled}
            onSubmitHandler={onSubmitHandler}>
            <InputUI
                type='email'
                placeholder='Email address'
                refer={emailRef}
                onChange={emailHandler}
                inputError={formState.emailInput.error}
                errorMessage={formState.emailInput.message}
            />
            <InputUI
                type='password'
                placeholder='Password'
                refer={passwordRef}
                onChange={passwordHandler}
                inputError={formState.passwordInput.error}
                errorMessage={formState.passwordInput.message}
            />
        </FormContainer>
    );
};

export default Login;
