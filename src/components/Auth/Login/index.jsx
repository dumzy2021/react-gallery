import { useState } from "react";
import { Button, Spinner } from "flowbite-react";
import { Formik, Form } from "formik";
import { toLower } from "lodash";
import * as Yup from "yup";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CustomInput } from "../../common";
import { ERROR, toastHandler } from "../../../utils";
import { useAuth } from "../../../contexts";

export const LoginContent = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
      setLoading(true);
      await login(email, password);
      const redirectTo = searchParams.get("redirect") || "/dashboard";
      navigate(redirectTo, { replace: true });
    } catch (error) {
 
      const type = error?.message?.includes("(auth/invalid-credential)")
        ? "Invalid Credentials"
        : "";
      toastHandler({
        message: `Failed to Sign in: ${
          type || error?.customData?._tokenResponse?.error?.message || ""
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
        Login
      </h3>
      <Formik
        initialValues={{ password: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <div className="mb-5">
              <CustomInput
                required
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <CustomInput
                required
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your Password"
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
                <span>Log In</span>
              )}
            </Button>
            <div className="text-sm text-center text-[667085] mt-6">
              <span>Don’t have an account? </span>
              <Link
                className="cursor-pointer text-[#00468B] font-medium"
                to="/auth/signup"
              >
                Sign up
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
