import React from "react";
import { useFormik } from "formik";
import axios from 'axios';

const Contact = () => {
    const initialValues = {
        name: "",
        email: "",
        message: ""

    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            // validationSchema: signUpSchema,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: async (values, action) => {
                console.log(values);
                await axios.post("http://127.0.0.1:8000/api/contact/", values)
                    .then(res => console.log('posting data', res)).catch(err => console.log(err))
                action.resetForm();
            },
        });

    console.log(errors);

    return (
        <>
            <div className="container">
                <h1 className="modal-title">Contact Us</h1>
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
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
                    <div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                        <button className="input-button" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                </div>
            </div>

        </>
    );
};
export default Contact;
