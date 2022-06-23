import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "Components/FormContainer";
import InputUI from "Components/InputUI";
import { useDispatch, useSelector } from "react-redux";
import { validateFormActions } from "ReduxStore/formValidation";
import { userSliceActions } from "ReduxStore/userSlice";
import { auth, signInWithEmailAndPassword } from "firebase.js";

const Login = props => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

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

        signInWithEmailAndPassword(
            auth,
            formState.emailInput.userEmail,
            formState.passwordInput.userPassword
        )
            .then(userAuth => {
                console.log(userAuth);
                dispatch(
                    userSliceActions.login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoUrl: userAuth.user.photoURL,
                    })
                );
                console.log("success");
                navigate("/", { replace: true });
            })
            .catch(error => {
                alert(error.message);
                dispatch(validateFormActions.enableButtonOnError("isLogIn"));
            });
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
