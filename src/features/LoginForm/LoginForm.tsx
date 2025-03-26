import { useRef } from "react";
import { EmailField } from "./EmailField";
import { PasswordField } from "./PasswordField";
import { ThemeToggle } from "@/features";
import { Button } from "@/components";
import { useFocusTrap, useFormValidation } from "@/hooks";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  useFocusTrap(formRef);

  const {
    form,
    errors,
    submitting,
    message,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation({ email: "", password: "" });

  return (
    <main className={styles.loginForm}>
      <h1 id="login-form-title" className={styles.loginForm__title}>
        Sign in
      </h1>
      <div className={styles.loginForm__form}>
        <form
          ref={formRef}
          onSubmit={(e) => handleSubmit(e, () => {})}
          noValidate
          aria-labelledby="login-form-title"
        >
          <EmailField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
          />

          <PasswordField
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
          />
          <Button disabled={submitting} type="submit">
            {submitting ? "Logging in..." : "Sign in"}
          </Button>
          <div className={styles.loginForm__messageWrap}>
            {message && (
              <div
                className={styles.loginForm__message}
                role="status">
                  {message}
              </div>
            )}
            {errors?.submit && (
              <div className={styles.loginForm__error} role="alert">
                {errors.submit}
              </div>
            )}
          </div>
          <ThemeToggle />
        </form>
      </div>
    </main>
  );
};
