import { createSlice } from "@reduxjs/toolkit";

// regex for validating email
const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const initialFormValidation = {
    emailInput: { error: null, message: null, userEmail: null },
    passwordInput: { error: null, message: null, userPassword: null },
    repeatPasswordInput: { error: null, message: null },
    submitButtonDisabled: true,
    submitLoginButtonDisabled: true,
};

const formValidationSlice = createSlice({
    name: "formvalidation",
    initialState: initialFormValidation,
    reducers: {
        validateEmail(state, action) {
            if (validEmailRegex.test(action.payload)) {
                state.emailInput = {
                    error: false,
                    message: null,
                    userEmail: action.payload,
                };
            } else {
                state.emailInput = {
                    error: true,
                    message: "Enter valid email",
                };
            }

            // enable submit button if no errors
            if (
                state.emailInput.error === false &&
                state.passwordInput.error === false &&
                state.repeatPasswordInput.error === false
            ) {
                state.submitButtonDisabled = false;
            } else {
                state.submitButtonDisabled = true;
            }
        },

        validatePassword(state, action) {
            // if password input is less than 6 characters
            if (action.payload.psswrd.length < 6) {
                state.passwordInput = {
                    error: true,
                    message: "Password is too short",
                };
            } else if (
                /* This if block is executed if user changes password
                  after filling the 'repeat password' input field.
                 So if 'repeat password' differs from new 'password',
                 'repeat password' becomes invalid */
                action.payload.repeatPsswrd.length > 5 &&
                action.payload.repeatPsswrd !== action.payload.psswrd
            ) {
                state.passwordInput = {
                    error: false,
                    message: null,
                };

                state.repeatPasswordInput = {
                    error: true,
                    message: "Passwords do not match!",
                };
            } else {
                state.passwordInput = {
                    error: false,
                    message: null,
                    userPassword: action.payload.psswrd,
                };
            }

            // enable submit button if no errors
            if (
                state.emailInput.error === false &&
                state.passwordInput.error === false &&
                state.repeatPasswordInput.error === false
            ) {
                state.submitButtonDisabled = false;
            } else {
                state.submitButtonDisabled = true;
            }
        },

        validateRepeatPassword(state, action) {
            if (action.payload.repeatPsswrd !== action.payload.psswrd) {
                state.repeatPasswordInput = {
                    error: true,
                    message: "Passwords do not match!",
                };
            } else {
                state.repeatPasswordInput = {
                    error: false,
                    message: null,
                };
            }
            // enable submit button if no errors
            if (
                state.emailInput.error === false &&
                state.passwordInput.error === false &&
                state.repeatPasswordInput.error === false
            ) {
                state.submitButtonDisabled = false;
            } else {
                state.submitButtonDisabled = true;
            }
        },

        validateLoginEmail(state, action) {
            if (validEmailRegex.test(action.payload)) {
                state.emailInput = {
                    error: false,
                    message: null,
                    userEmail: action.payload,
                };
            } else {
                state.emailInput = {
                    error: true,
                    message: "Enter valid email",
                };
            }
            // enable submit button if no errors
            if (
                state.emailInput.error === false &&
                state.passwordInput.error === false
            ) {
                state.submitLoginButtonDisabled = false;
            } else {
                state.submitLoginButtonDisabled = true;
            }
        },

        validateLoginPassword(state, action) {
            if (action.payload.length < 6) {
                state.passwordInput = {
                    error: true,
                    message: "password is too short",
                };
            } else {
                state.passwordInput = {
                    error: false,
                    message: null,
                    userPassword: action.payload,
                };
            }
            // enable submit button if no errors
            if (
                state.emailInput.error === false &&
                state.passwordInput.error === false
            ) {
                state.submitLoginButtonDisabled = false;
            } else {
                state.submitLoginButtonDisabled = true;
            }
        },
        disableButtonOnSubmit(state) {
            state.submitButtonDisabled = true;
            state.submitLoginButtonDisabled = true;
        },
        enableButtonOnError(state, action) {
            if (action.payload === "isSignUp") {
                state.submitButtonDisabled = false;
                state.submitLoginButtonDisabled = true;
            } else if (action.payload === "isLogIn") {
                state.submitLoginButtonDisabled = false;
                state.submitButtonDisabled = false;
            }
        },
    },
});

// const sendFormData = (formData) => {
//     return (dispatch) => {
//         dispatch()
//     }
// }

export const validateFormActions = formValidationSlice.actions;

export default formValidationSlice.reducer;
