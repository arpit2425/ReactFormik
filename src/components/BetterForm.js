import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Errormsg from "./Errormsg";
function BetterForm() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comment: "",
    address: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!!"),
    email: Yup.string().required("Required!!"),
    channel: Yup.string().required("Required!!"),
    comment: Yup.string().required("Required!!"),
    address: Yup.string().required("Required!!"),
  });
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={Errormsg} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>
        <div className="form-control">
          <label htmlFor="comment">Channel</label>
          <Field as="textarea" type="text" id="comment" name="comment" />
          <ErrorMessage name="comment" />
        </div>

        <div className="form-control">
          <label htmlFor="address">address</label>
          <Field name="address">
            {(props) => {
              const { field, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default BetterForm;
