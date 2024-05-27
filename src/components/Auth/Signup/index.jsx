import { Button, Spinner } from "flowbite-react";
import { Formik, Form } from "formik";
import { toLower } from "lodash";
import { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { CustomInput } from "../../common";
import { ERROR, toastHandler } from "../../../utils";

export const SignupContent = () => {
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const { email, password, username, firstName, lastName } = values;
      setLoading(true);
      await signup(email, password, { username, firstName, lastName });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      toastHandler({
        message: `Failed to create an account: ${
          error?.customData?._tokenResponse?.error?.message || ""
        }`,
        type: toLower(ERROR),
      });
    }
    setLoading(false);
    // actions.resetForm();
  };

  return (
    <>
      <h3 className="text-[#101828] font-semibold text-3xl md:text-4xl mb-8">
        Sign Up
      </h3>
      <Formik
        initialValues={{
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <div className="mb-5">
              <CustomInput
                label="Username"
                type="text"
                name="username"
                required
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-5">
              <CustomInput
                label="First Name"
                type="text"
                name="firstName"
                required
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-5">
              <CustomInput
                label="Last Name"
                type="text"
                name="lastName"
                required
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-5">
              <CustomInput
                label="Email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-5">
              <CustomInput
                label="Password"
                type="password"
                name="password"
                required
                placeholder="Enter your Password"
              />
            </div>
            <div className="mb-6">
              <CustomInput
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="Enter your Password"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={!isValid || loading}
              className="w-full bg-[#00468B] hover:!bg-[#00468B] inline-flex items-center gap-4"
            >
              {loading ? (
                <>
                  <Spinner size="md" className=" mr-3" />
                  <span>Please wait..</span>
                </>
              ) : (
                <span>Sign Up</span>
              )}
            </Button>
            <div className="text-sm text-center text-[667085] mt-6">
              <span>Already have an account? </span>
              <Link
                className="cursor-pointer text-[#00468B] font-medium"
                to="/auth"
              >
                Login
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
