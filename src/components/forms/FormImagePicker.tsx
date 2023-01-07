import { FormikErrors, useFormikContext } from "formik";
 
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

interface IProps {
  name: string;
}

const FormImagePicker = ({ name }: IProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<any>();
  const imageUris = values[name]

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(name, imageUris.filter((imageUri: string) => imageUri !== uri));
  };

  return (
    <>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
      <ErrorMessage
        // get name property of errors obj & tell TS it's a key of that obj to stop error
        error={errors[name as keyof FormikErrors<unknown>]}
        visible={touched[name as keyof FormikErrors<unknown>]}
      />
    </>
  );
};

export default FormImagePicker;

