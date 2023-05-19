import { useState } from "react";

export const Form = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}