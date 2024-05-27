import { useState } from "react";
import { Button, Spinner } from "flowbite-react";
import { Formik, Form } from "formik";
import { toLower } from "lodash";
import * as Yup from "yup";
import { CustomFileInput, CustomInput, CustomTextarea } from "../../common";
import {
  GALLERY_DB_NAME,
  ERROR,
  FILE_SIZE,
  SUCCESS,
  SUPPORTED_FORMATS,
  toastHandler,
} from "../../../utils";
import { db, storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../../contexts";

export const CreateGalleryForm = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    caption: Yup.string()
      .required("Caption is required")
      .max(40, "Caption must be at most 40 characters"),
    description: Yup.string()
      .required("Description is required")
      .max(40, "Description must be at most 40 characters"),

    document: Yup.mixed()
      .required("A file is required")
      .test(
        "fileSize",
        "File too large",
        (value) => !value || (value && value.size <= FILE_SIZE)
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });

  const handleSubmit = async (values, actions) => {
    setLoading(true);
    const { caption, description, document } = values;
    try {
      if (document) {
        const name = new Date().getTime() + document?.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, document);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            setProgress(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          (error) => {
            toastHandler({
              message: error.message,
              type: toLower(ERROR),
            });
            setLoading(false);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

              const docRef = await addDoc(collection(db, GALLERY_DB_NAME), {
                caption,
                description,
                image: downloadURL,
                timestamp: serverTimestamp(),
                uploadedBy: currentUser?.username,
              });
              toastHandler({
                message: `Gallery created: ${docRef.id}`,
                type: toLower(SUCCESS),
              });
              setLoading(false);
              navigate("/dashboard");
            } catch (firestoreError) {
              toastHandler({
                message: `Error adding document: ${firestoreError.message}`,
                type: toLower(ERROR),
              });
              setLoading(false);
            }
          }
        );
      } else {
        toastHandler({
          message: `No file selected for upload`,
          type: toLower(ERROR),
        });
        setLoading(false);
      }
    } catch (error) {
      toastHandler({
        message: `Error uploading file: ${error}`,
        type: toLower(ERROR),
      });
      setLoading(false);
    }
  };

  return (
    <div className="mb-6 max-w-[500px] mx-auto">
      <h3 className="text-[#101828] font-semibold text-xl md:text-2xl mb-4">
        Create Gallery
      </h3>
      <Formik
        initialValues={{ document: "", caption: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, setFieldValue }) => (
          <Form>
            <div className="mb-5">
              <CustomInput
                label="Caption"
                type="text"
                name="caption"
                placeholder="Enter your Caption"
                required
              />
            </div>
            <div className="mb-5">
              <CustomTextarea
                label="Description"
                type="text"
                name="description"
                rows={4}
                required
              />
            </div>
            <div className="mb-6">
              <CustomFileInput
                name="document"
                type="file"
                setFieldValue={setFieldValue}
                accept={SUPPORTED_FORMATS.join(",")}
              />
            </div>

            <Button
              type="submit"
              disabled={
                !isValid || loading || (progress !== null && progress < 100)
              }
              className="w-full bg-[#00468B] hover:!bg-[#00468B] inline-flex items-center gap-4"
            >
              {loading || (progress !== null && progress < 100) ? (
                <>
                  <Spinner size="md" className=" mr-3" />

                  <span>Please wait..</span>
                </>
              ) : (
                <span>Submit</span>
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
