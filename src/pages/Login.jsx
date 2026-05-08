import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../lib/auth";
import "../css/auth.css";

const initialForm = {
  email: "",
  password: "",
};

function validateForm(values) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  return errors;
}

export default function Login({ onLogin }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const redirectPath = location.state?.from?.pathname || "/dashboard";

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

    const result = loginUser(form);

    if (!result.success) {
      setFormError(result.error);
      return;
    }

    onLogin(result.user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-shell fade-in">
        <section className="auth-panel auth-panel-brand page-shell">
          <span className="eyebrow">Secure Access</span>
          <h1>Sign in to your campus operations workspace.</h1>
          <p>
            Resume student administration, academic monitoring, and dashboard
            workflows from one secure interface.
          </p>

          <div className="auth-highlight-list">
            <div className="auth-highlight-item">
              <strong>Unified workspace</strong>
              <span>Students, faculty, courses, and reporting in one place.</span>
            </div>
            <div className="auth-highlight-item">
              <strong>Session-aware routing</strong>
              <span>Protected pages stay locked until a valid login succeeds.</span>
            </div>
            <div className="auth-highlight-item">
              <strong>GitHub Pages ready</strong>
              <span>Routing remains compatible with your existing hash-based deploy.</span>
            </div>
          </div>
        </section>

        <section className="auth-panel auth-panel-form page-shell">
          <div className="auth-form-header">
            <span className="eyebrow">Login</span>
            <h2>Welcome back</h2>
            <p>Use your registered email and password to continue.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {formError ? (
              <div className="alert alert-danger auth-alert" role="alert">
                {formError}
              </div>
            ) : null}

            <div>
              <label className="form-label" htmlFor="login-email">
                Email address
              </label>
              <input
                id="login-email"
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

            <div>
              <label className="form-label" htmlFor="login-password">
                Password
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              {errors.password ? (
                <div className="invalid-feedback">{errors.password}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100">
              Sign In
            </button>
          </form>

          <p className="auth-switch-copy">
            Need an account? <Link to="/register">Create one now</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
