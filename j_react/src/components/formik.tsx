import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "../styles/formik.scss";
import { Button } from "react-bootstrap";

interface IFormikExample {
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  gender: string;
  choice: string;
  subjects: string[];
  url: string;
  about: string;
}

const initialValues: IFormikExample = {
  firstName: "",
  lastName: "",
  email: "",
  contact: 0,
  gender: "",
  choice: "",
  subjects: [],
  url: "",
  about: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string(),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  gender: Yup.string().required("Please select gender."),
  subjects: Yup.array().min(1, "Please select at least one subject"),
  url: Yup.string().required("Please enter url."),
  about: Yup.string().required("Please enter about."),
});

export default function FormikExample() {
  const onSubmit = (values: IFormikExample, { resetForm }: any) => {
    console.log(values);

    resetForm();
  };

  return (
    <>
      <div className="formik-form">
        <h3>Resum Form</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, resetForm }) => (
            <Form className="form">
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="lastName"> Second Name</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="contact">contact</label>
                <Field type="tel" id="contact" name="contact" />
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="gender">Gender</label>
                <div role="group" aria-labelledby="gender">
                  <label htmlFor="male" className="pe-2">
                    <Field type="radio" name="gender" value="male" />
                    Male
                  </label>

                  <label htmlFor="female">
                    <Field type="radio" name="gender" value="female" />
                    Female
                  </label>

                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="error"
                  />
                </div>
                <ErrorMessage name="gender" />
              </div>

              <div>
                <label htmlFor="subjects"> Subjects</label>
                <div role="group" aria-labelledby="subjects">
                  <label htmlFor="englist" className="pe-2">
                    <Field type="checkbox" name="subjects" value="English" />
                    English
                  </label>

                  <label htmlFor="maths" className="pe-2">
                    <Field type="checkbox" name="subjects" value="Maths" />
                    Maths
                  </label>

                  <label htmlFor="physics" className="pe-2">
                    <Field type="checkbox" name="subjects" value="Physics" />
                    Physics
                  </label>
                </div>
                <ErrorMessage name="subjects" />
              </div>

              <div>
                <label htmlFor="resume">Resume</label>
                {/* <Field type="file" name="resume" />
            <ErrorMessage name="resume" component="div" className="error" /> */}
              </div>

              <div>
                <label htmlFor="url">Enter Url</label>
                <Field type="text" name="url" />
                <ErrorMessage name="url" component="div" className="url" />
              </div>

              <div>
                <label htmlFor="choice">Select your choice</label>
                <Field as="select" name="choice">
                  <option value="" label="Select your ans" />
                  <option value="answer1" label="answer1" />
                  <option value="answer2" label="answer2" />
                  <option value="answer3" label="answer3" />
                </Field>
              </div>

              <div>
                <label htmlFor="about">About</label>
                <Field type="textarea" name="about" />
                <ErrorMessage name="about" component="div" className="error" />
              </div>

              <div>
                <Button variant="success" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>

                <button
                  type="button"
                  onClick={() => resetForm()}
                  className="btn btn-primary ms-3"
                >
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
