export const initialState = {
    session: JSON.parse(localStorage.getItem("session")) || null,
    isAuthenticated: false,
    msgError: null,
    btnDisabled: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...initialState,
                session: action.payload.session,
                isAuthenticated: true,
            };
        case types.loginError:
            return {
                ...state,
                loginError: action.payload,
            };
        case types.logout:
            return {
                ...initialState,
                sessionStorage: null,
            };
        case types.isDisabledBtn:
            return {
                ...state,
                btnDisabled: action.payload,
            };

        default:
            return state;
    }
};
