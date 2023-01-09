import { FormikErrors, useFormikContext } from "formik";
import { StyleSheet } from "react-native";

import { CategoryType } from "../../typings";
import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

interface IProps {
  items: CategoryType[];
  name: string;
  numberOfColumns?: number;
  PickerItemComponent?:
    | (({
        item,
        onPress,
      }: {
        item: CategoryType;
        onPress: () => void;
      }) => JSX.Element)
    | undefined;
  placeholder?: string;
  width?: string | number;
}

const FormPicker = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}: IProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        // @ts-ignore
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage
        // get name property of errors obj & tell TS it's a key of that obj to stop error
        error={errors[name as keyof FormikErrors<unknown>]}
        visible={touched[name as keyof FormikErrors<unknown>]}
      />
    </>
  );
};

export default FormPicker;

const styles = StyleSheet.create({});
