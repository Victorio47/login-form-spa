import { useState } from "react";
import { InputField, PasswordField } from "../../components";

export const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const validate = () => {
    const nextErrors: typeof errors = {};
    if (!form.email) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      nextErrors.email = "Invalid email";

    if (!form.password) nextErrors.password = "Password is required";
    else if (form.password.length < 6)
      nextErrors.password = "Password too short";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleBlur = () => {
    validate();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setMessage("");
    try {
      await fakeFetch(form.email, form.password);
      setMessage("Login successful!");
    } catch (err) {
      setErrors({ password: "Invalid credentials" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        autoComplete="email"
        required
      />

      <PasswordField
        label="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
      />

      <button type="submit" disabled={submitting}>
        {submitting ? "Logging in..." : "Log In"}
      </button>

      {message && <div role="status">{message}</div>}
    </form>
  );
};

const fakeFetch = (email: string, password: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@example.com" && password === "12345678")
        resolve("OK");
      else reject(new Error("Wrong creds"));
    }, 1000);
  });
