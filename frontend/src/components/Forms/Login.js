import React from "react";
import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Login = () => {
    let navigate = useNavigate();
    const initialValues = {
        email: "",
        password: ""

    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: async (values, action) => {
                console.log(values);
                await axios.post("http://127.0.0.1:8000/validate/user/", values)
                    .then(res => console.log('posting data', res)).catch(err => console.log(err))
                action.resetForm();
                navigate("/profile");
            },
        });

    console.log(errors);

    return (
        <>
            <div className="container">
                <h1 className="modal-title">Welcome!</h1>
                <div className="form">
                <form onSubmit={handleSubmit}>
        
                    <div class="mb-3">
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
                    <div class="mb-3">
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
                    <div>
                        <button className="input-button" type="submit">
                            Login
                        </button>
                    </div>
                </form>
                </div>
      
            </div>

        </>
    );
};
export default Login;
