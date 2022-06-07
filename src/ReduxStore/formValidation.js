import { createSlice } from "@reduxjs/toolkit";

// regex for validating email
const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const initialFormValidation = {
    emailInput: { error: null, message: null },
    passwordInput: { error: null, message: null },
    repeatPasswordInput: { error: null, message: null },
    submitButtonDisabled: true,
};

const formValidationSlice = createSlice({
    name: "formvalidation",
    initialState: initialFormValidation,
    reducers: {
        validateEmail(state, action) {
            if (validEmailRegex.test(action.payload)) {
                state.emailInput = { error: false, message: null };
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
    },
});

export const validateFormActions = formValidationSlice.actions;

export default formValidationSlice.reducer;
