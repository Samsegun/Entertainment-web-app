import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "Components/FormContainer";
import InputUI from "Components/InputUI";
import { useDispatch, useSelector } from "react-redux";
import { validateFormActions } from "ReduxStore/formValidation";
import { userSliceActions } from "ReduxStore/userSlice";
import {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase.js";

const Signup = props => {
    // refs
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();

    const navigate = useNavigate();

    const formState = useSelector(state => state.validateForm);
    // const slicet = useSelector(state => state.userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        props.setShowNavSearch(false);
    }, [props]);

    const emailChangeHandler = () => {
        dispatch(validateFormActions.validateEmail(emailRef.current.value));
    };

    const passwordChangeHandler = () => {
        dispatch(
            validateFormActions.validatePassword({
                psswrd: passwordRef.current.value,
                repeatPsswrd: repeatPasswordRef.current.value,
            })
        );
    };

    const repeatPasswordChangeHandler = () => {
        dispatch(
            validateFormActions.validateRepeatPassword({
                repeatPsswrd: repeatPasswordRef.current.value,
                psswrd: passwordRef.current.value,
            })
        );
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        dispatch(validateFormActions.disableButtonOnSubmit());

        createUserWithEmailAndPassword(
            auth,
            formState.emailInput.userEmail,
            formState.passwordInput.userPassword
        )
            .then(userAuth => {
                updateProfile(userAuth.user, {
                    displayName: "user",
                    photoURL: null,
                })
                    .then(
                        dispatch(
                            userSliceActions.login({
                                email: userAuth.user.email,
                                userName: userAuth.user.displayName,
                                uid: userAuth.user.uid,
                            })
                        )
                    )
                    .catch(error => {
                        alert("user not updated" + error.message);
                    });
                console.log(userAuth);
                console.log("success");
                navigate("/", { replace: true });
            })
            .catch(error => {
                alert(error.message);
                dispatch(validateFormActions.enableButtonOnError("isSignUp"));
            });
    };

    return (
        <FormContainer
            heading='Sign Up'
            account='Already have an account?'
            accountAction='Login'
            action='Create an account'
            destination='/login'
            isDisabled={formState.submitButtonDisabled}
            onSubmitHandler={onSubmitHandler}>
            <InputUI
                type='email'
                placeholder='Email address'
                refer={emailRef}
                onChange={emailChangeHandler}
                inputError={formState.emailInput.error}
                errorMessage={formState.emailInput.message}
            />
            <InputUI
                type='password'
                placeholder='Password'
                refer={passwordRef}
                onChange={passwordChangeHandler}
                inputError={formState.passwordInput.error}
                errorMessage={formState.passwordInput.message}
            />
            <InputUI
                type='password'
                placeholder='Repeat Password'
                refer={repeatPasswordRef}
                onChange={repeatPasswordChangeHandler}
                inputError={formState.repeatPasswordInput.error}
                errorMessage={formState.repeatPasswordInput.message}
            />
        </FormContainer>
    );
};

export default Signup;
