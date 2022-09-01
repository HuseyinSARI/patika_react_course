import React from "react";
import styles from './style.module.css'; 
import { useFormik } from "formik";

import validation from "./validation";

function Signup() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: validation,
    });

    return (
        <form className={styles.formikform} onSubmit={formik.handleSubmit}>
            <label>Email Address</label>
            <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />

            {formik.errors.email && formik.touched.email &&<div> {formik.errors.email} </div>}

            <br />

            <label>Password</label>
            <input
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
            />

            {formik.errors.password && formik.touched.password && <div> {formik.errors.password} </div>}

            <br />

            <label>Confirm Password</label>
            <input
                name="passwordConfirm"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
                onBlur={formik.handleBlur}
            />

            {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <div> {formik.errors.passwordConfirm} </div>}

            <br />
            <br />

            <button type="submit">Submit</button>

            <br />
            <br />

            <code> {JSON.stringify(formik.values)} </code>
        </form>
    );
}

export default Signup;
