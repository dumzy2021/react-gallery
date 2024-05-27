import { useState } from "react";
import { useField } from "formik";
import { Label, TextInput } from "flowbite-react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import PropTypes from "prop-types";
export const CustomInput = ({ label, type, required = false, ...props }) => {
  const [field, meta] = useField(props);
  const isPropTypePassword = type === "password";
  const [inputType, setInputType] = useState(type);
  const { error, touched } = meta;
  const hasError = error && touched;
  const color = hasError ? "failure" : undefined;

  const inputId = `${props.name}-custom-input`;

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const iconType = () =>
    isPropTypePassword ? (
      <span
        className=" cursor-pointer absolute inset-y-0 end-0 top-3 pe-3.5"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          toggleInputType();
        }}
      >
        {inputType === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
      </span>
    ) : (
      ""
    );

  return (
    <div>
      <Label htmlFor={inputId} color={color}>
        {label} {required && <span className="text-red-600">*</span>}
      </Label>
      <div className="relative">
        <TextInput
          id={inputId}
          {...field}
          {...props}
          type={inputType}
          color={color}
          helperText={hasError ? error : ""}
        />

        {iconType()}
      </div>
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password", "email", "number"]).isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
