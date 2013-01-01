import { useContext, useEffect } from "react";
import { Link } from "next/link";

import useForm from "./../../hooks/useForm";
// import authContext from "./../../context/auth/authContext";
// import { setErrorLogin, startLogin } from "./../../actions/auth";

const Login = () => {
    const [authState, dispatch] = useContext(authContext);

    const [stateValues, handleInputChange] = useForm({
        email: "",
        password: "",
    });
    const { email, password } = stateValues;



    async function handleSubmit(e) {
        e.preventDefault();

        // await startLogin({ email, password }, dispatch);
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleInputChange}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={handleInputChange}
                        value={password}
                    />
                </div>
                <div className="form-group">
                    <input
                        disabled={authState.btnDisabled}
                        className="btn btn-primary"
                        type="submit"
                        value="Login"
                    />
                </div>

                {authState.loginError && (
                    <div className="alert alert-danger" role="alert">
                        {authState.loginError}
                    </div>
                )}

                <Link
                    disabled={authState.btnDisabled}
                    className="link"
                    to="/auth/register"
                >
                    Create a new account
                </Link>
            </form>
        </div>
    );
};

export default Login;
