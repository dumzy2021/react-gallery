import { useField } from "formik";
import { Label, Textarea } from "flowbite-react";
import PropTypes from "prop-types";
export const CustomTextarea = ({
  label,
  rows = 4,
  required = false,
  ...props
}) => {
  const [field, meta] = useField(props);

  const { error, touched } = meta;
  const hasError = error && touched;
  const color = hasError ? "failure" : undefined;

  const inputId = `${props.name}-custom-input`;

  return (
    <div>
      <Label htmlFor={inputId} color={color}>
        {label} {required && <span className="text-red-600">*</span>}
      </Label>
      <div className="relative">
        <Textarea
          id={inputId}
          {...field}
          {...props}
          rows={rows}
          color={color}
          helperText={hasError ? error : ""}
        />
      </div>
    </div>
  );
};

CustomTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
};
