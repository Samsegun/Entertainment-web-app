import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "Components/FormContainer";
import InputUI from "Components/InputUI";
import { useDispatch, useSelector } from "react-redux";
import { validateFormActions } from "ReduxStore/formValidation";
import { userSliceActions } from "ReduxStore/userSlice";
import { navBarActions } from "ReduxStore/navbar";
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

                const userDetails = {
                    email: userAuth.user.email,
                    userName: userAuth.user.displayName,
                    profilePix: userAuth.user.photoURL,
                    uid: userAuth.user.uid,
                };

                dispatch(userSliceActions.login(userDetails));
                sessionStorage.setItem("user", JSON.stringify(userDetails));
                navigate("/", { replace: true });
            })
            .catch(error => {
                alert(error.message);
                dispatch(validateFormActions.enableButtonOnError("isLogIn"));
            });
    };

    useEffect(() => {
        props.setShowNavSearch(false);

        dispatch(navBarActions.setBackDrop(false));
        dispatch(navBarActions.setShowSignInOptions(false));
    }, [props, dispatch]);

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
