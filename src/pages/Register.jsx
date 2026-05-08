import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../lib/auth";
import "../css/auth.css";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function validateForm(values) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = "Full name is required.";
  } else if (values.name.trim().length < 3) {
    errors.name = "Full name must be at least 3 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

export default function Register({ onRegister }) {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
    setFormError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const result = registerUser(form);

    if (!result.success) {
      setFormError(result.error);
      return;
    }

    onRegister(result.user);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-shell fade-in">
        <section className="auth-panel auth-panel-brand page-shell">
          <span className="eyebrow">New Account</span>
          <h1>Create secure access for your campus management workspace.</h1>
          <p>
            Register an administrator profile locally, then use it to unlock the
            protected dashboard experience.
          </p>

          <div className="auth-highlight-list">
            <div className="auth-highlight-item">
              <strong>Fast local setup</strong>
              <span>Account details are stored in localStorage for this project.</span>
            </div>
            <div className="auth-highlight-item">
              <strong>Credential validation</strong>
              <span>Email format and password rules are enforced before access.</span>
            </div>
            <div className="auth-highlight-item">
              <strong>Responsive by default</strong>
              <span>The full auth flow works across desktop, tablet, and mobile.</span>
            </div>
          </div>
        </section>

        <section className="auth-panel auth-panel-form page-shell">
          <div className="auth-form-header">
            <span className="eyebrow">Register</span>
            <h2>Create account</h2>
            <p>Set up an administrator profile to access the dashboard.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {formError ? (
              <div className="alert alert-danger auth-alert" role="alert">
                {formError}
              </div>
            ) : null}

            <div>
              <label className="form-label" htmlFor="register-name">
                Full name
              </label>
              <input
                id="register-name"
                name="name"
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Campus administrator"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.name ? (
                <div className="invalid-feedback">{errors.name}</div>
              ) : null}
            </div>

            <div>
              <label className="form-label" htmlFor="register-email">
                Email address
              </label>
              <input
                id="register-email"
                name="email"
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="admin@campusos.edu"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email ? (
                <div className="invalid-feedback">{errors.email}</div>
              ) : null}
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="register-password">
                  Password
                </label>
                <input
                  id="register-password"
                  name="password"
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Minimum 6 characters"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.password ? (
                  <div className="invalid-feedback">{errors.password}</div>
                ) : null}
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="register-confirm-password">
                  Confirm password
                </label>
                <input
                  id="register-confirm-password"
                  name="confirmPassword"
                  type="password"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  placeholder="Re-enter password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.confirmPassword ? (
                  <div className="invalid-feedback">{errors.confirmPassword}</div>
                ) : null}
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100">
              Create Account
            </button>
          </form>

          <p className="auth-switch-copy">
            Already registered? <Link to="/login">Sign in here</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
