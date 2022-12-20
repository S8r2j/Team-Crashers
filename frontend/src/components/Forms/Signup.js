import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../Validation/SignUpSchema";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    let navigate = useNavigate();
    const initialValues = {
        name: "",
        email: "",
        password: ""

    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: async (values, action) => {
                console.log(values);
                await axios.post("http://127.0.0.1:8000/signup/", values)
                    .then(res => console.log('posting data', res)).catch(err => console.log(err))
                action.resetForm();
                {navigate("/login")}
            },
        });

    console.log(errors);

    return (
        <>
            <div className="container">
                <h1 className="modal-title">Welcome!</h1>
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="input-label">
                            Name
                        </label>
                        <input
                            type="name"
                            autoComplete="off"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.name && errors.name ? (
                            <p className="form-error">{errors.name}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="input-label">
                            Email
                        </label>
                        <input
                            type="email"
                            autoComplete="off"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                            <p className="form-error">{errors.email}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                        <input
                            type="password"
                            autoComplete="off"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                            <p className="form-error">{errors.password}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm_password" className="input-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            autoComplete="off"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirm Password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.confirm_password && touched.confirm_password ? (
                            <p className="form-error">{errors.confirm_password}</p>
                        ) : null}
                    </div>
                    <div>
                        <button className="input-button" type="submit">
                            SignUp
                        </button>
                    </div>
                </form>
                </div>
                <p className="sign-up">
                    Already have an account? <Link to="/login" >Log In now</Link>
                </p>
            </div>

        </>
    );
};
export default SignUp;
