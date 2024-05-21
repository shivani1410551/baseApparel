import Logo from "/images/logo.svg";
import "./style/style.scss";
import React from "react";
import { ErrorMessage, useFormik } from "formik";
import { Formik, Form, Field } from "formik";
import { FormSchema } from "./FormSchema";
import ArrowImg from "/public/images/icon-arrow.svg";
function App() {
  const formInitialValues = {
    email: "",
  };
  const { handleSubmit, handleChange, touched, handleBlur, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: FormSchema,
      onSubmit: (values) => {
        console.log(values);
        values.email = "";
      },
    });

  return (
    <main>
      <div className="container">
        {" "}
        <div className="text-side">
          <img src={Logo} alt="Logo Base Apparel" className="logo" />
          <div className="description">
            <span>
              <h1>We're</h1>
              <h2>coming</h2>
              <h2>soon</h2>
            </span>
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
          <Formik>
            <Form
              autoComplete="off"
              onBlur={handleBlur}
              onSubmit={handleSubmit}
            >
              <label htmlFor="email">
                <Field
                  type="text"
                  required
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  className="submit_email"
                  value={values.email}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">
                <img
                  src={ArrowImg}
                  alt="Submit button"
                  className="submit_img"
                />
              </button>
              {errors.email && touched.email ? (
                <p className="error">{errors.email}</p>
              ) : null}
            </Form>
          </Formik>
        </div>
        <div className="picture-side"></div>
      </div>
    </main>
  );
}

export default App;
