import { useState } from "react";

const useForm = (initialState) => {
    const [state, setState] = useState(initialState);
    const handleInputChange = ({ target }) => {
        setState({ ...state, [target.name]: target.value });
    };
    const reset = (newState = initialState) => {
        setState(newState);
    };
    return [state, handleInputChange, reset];
};

export default useForm;
