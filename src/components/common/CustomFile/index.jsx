import { useField } from "formik";
import { FileInput, Label } from "flowbite-react";
import PropTypes from "prop-types";
import { UploadIcon } from "../../../assets";
import { useState } from "react";

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
export const CustomFileInput = ({ accept, setFieldValue, ...props }) => {
  const [ meta,] = useField(props);
  const { error } = meta;
  const hasError = error;
  const inputId = `${props.name}`;
  const [backgroundImage, setBackgroundImage] = useState("");


  const handleChange = async (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue("document", file);

    if (file) {
      const base64 = await fileToBase64(file);
      setBackgroundImage(base64);
    } else {
      setBackgroundImage("");
    }
  };

  const hasErrorClass =
    "flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-red-500 bg-red-100 hover:bg-red-200 dark:border-red-400 dark:bg-red-800 dark:hover:border-red-300 dark:hover:bg-red-700";
  const isOkClass =
    "flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600";
  return (
    <div className="flex w-full flex-col">
      <Label htmlFor={inputId} className={hasError ? hasErrorClass : isOkClass}>
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className=" w-full h-full"
        >
          <div className="flex h-full flex-col items-center justify-center pb-6 pt-5">
            <UploadIcon className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG or JPEG (not more than 2 mb).
            </p>
          </div>
        </div>
      </Label>
      <FileInput
        id={inputId}
        type="file"
        className="hidden"
        accept={accept}
        onChange={handleChange}
      />
      {hasError ? (
        <span className=" inline-block mt-1 text-red-600">{error}</span>
      ) : (
        ""
      )}
    </div>
  );
};

CustomFileInput.propTypes = {
  accept: PropTypes.string,
  name: PropTypes.string.isRequired,
};
