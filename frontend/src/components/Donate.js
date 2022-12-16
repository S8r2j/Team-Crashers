import React from "react";
import { useFormik } from "formik";
import axios from 'axios';
import { Link } from "react-router-dom";
const Donate = () => {
    const initialValues = {
      name: "string",
      father_name: "string",
      contact: "string",
      email: "string",
      dob: "2022-12-16",
      city: "string",
      state: "string",
      country: "string",
      pin_code: 0,
      donate_amount: 0,
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
                await axios.post("http://127.0.0.1:8000/api/donate/", values)
                    .then(res => console.log('posting data', res)).catch(err => console.log(err))
                action.resetForm();
            },
        });

    console.log(errors);

    return (
        <>
            <div className="container">
                <h1 className="modal-title">Donate Us</h1>
                <p>Your Small donation can change millions of Life</p>
                <p>Account No : 5452836457574863</p>
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
                        <label htmlFor="father_name" className="input-label">
                            Father Name
                        </label>
                        <input
                            type="name"
                            autoComplete="off"
                            name="father_name"
                            id="father_name"
                            placeholder="Father Name"
                            value={values.father_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.father_name && errors.father_name ? (
                            <p className="form-error">{errors.father_name}</p>
                        ) : null}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="contact" className="input-label">
                            Contacts
                        </label>
                        <input
                            type="number"
                            autoComplete="off"
                            name="contact"
                            id="contact"
                            placeholder="Contact number"
                            value={values.contact}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.contact && errors.contact ? (
                            <p className="form-error">{errors.contact}</p>
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
                    <div class="mb-3">
                        <label htmlFor="dob" className="input-label">
                            Date of Birth
                        </label>
                        <input
                            type="number"
                            autoComplete="off"
                            name="dob"
                            id="dob"
                            placeholder="2000-11-29"
                            value={values.dob}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.dob && errors.dob ? (
                            <p className="form-error">{errors.dob}</p>
                        ) : null}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="city" className="input-label">
                            City
                        </label>
                        <input
                            type="text"
                            autoComplete="off"
                            name="city"
                            id="city"
                            placeholder=" city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.city && errors.city ? (
                            <p className="form-error">{errors.city}</p>
                        ) : null}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="state" className="input-label">
                            State
                        </label>
                        <input
                            type="state"
                            autoComplete="off"
                            name="state"
                            id="state"
                            placeholder="state"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.state && errors.state ? (
                            <p className="form-error">{errors.state}</p>
                        ) : null}
                    </div>
                   
                     <div class="mb-3">
                        <label htmlFor="name" className="input-label">
                            Country
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
                        <label htmlFor="name" className="input-label">
                            Postal Code
                        </label>
                        <input
                            type="number"
                            autoComplete="off"
                            name="pin_code"
                            id="pin_code"
                            placeholder="postal code"
                            value={values.pin_code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.pin_code && errors.pin_code ? (
                            <p className="form-error">{errors.pin_code}</p>
                        ) : null}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="name" className="input-label">
                            Amount
                        </label>
                        <input
                            type="number"
                            autoComplete="off"
                            name="donate_amount"
                            id="donate_amount"
                            placeholder="Amount"
                            value={values.donate_amount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.donate_amount && errors.donate_amount ? (
                            <p className="form-error">{errors.donate_amount}</p>
                        ) : null}
                    </div>
                    <div>
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
export default Donate;
