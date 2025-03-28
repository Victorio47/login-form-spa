import { useState } from "react";
export const useFormValidation = (initialValues) => {
    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const validate = (fields = form) => {
        const nextErrors = {};
        if (!fields.email)
            nextErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(fields.email))
            nextErrors.email = "Invalid email";
        if (!fields.password)
            nextErrors.password = "Password is required";
        else if (fields.password.length < 6)
            nextErrors.password = "Password is too short";
        return nextErrors;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined, submit: undefined }));
    };
    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = "";
        if (name === "email") {
            if (!value)
                error = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(value))
                error = "Invalid email";
        }
        if (name === "password") {
            if (!value)
                error = "Password is required";
            else if (value.length < 6)
                error = "Password is too short";
        }
        setErrors((prev) => ({ ...prev, [name]: error || undefined }));
    };
    const handleSubmit = async (e, onSuccess = () => { }, onError) => {
        e.preventDefault();
        const validationErrors = validate(form);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            onError?.();
            return;
        }
        setSubmitting(true);
        setMessage("");
        try {
            await fakeFetch(form.email, form.password);
            setMessage("Login successful!");
            onSuccess();
        }
        catch (err) {
            setErrors((prev) => ({
                ...prev,
                submit: "Invalid credentials",
            }));
        }
        finally {
            setSubmitting(false);
        }
    };
    return {
        form,
        errors,
        submitting,
        message,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};
const fakeFetch = (email, password) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (email === "admin@example.com" && password === "12345678") {
            resolve("OK");
        }
        else {
            reject(new Error("Wrong creds"));
        }
    }, 1000);
});
