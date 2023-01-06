import { FormikErrors, useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

interface IProps {
  items: CategoryType[];
  name: string;
  PickerItemComponent: ({
    item,
    onPress,
  }: {
    item: CategoryType;
    onPress: () => void;
  }) => JSX.Element;
  placeholder?: string;
  width?: string | number;
}

const AppFormPicker = ({
  items,
  name,
  PickerItemComponent,
  placeholder,
  width,
}: IProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        // @ts-ignore
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessage
        // get name property of errors obj & tell TS it's a key of that obj to stop error
        error={errors[name as keyof FormikErrors<unknown>]}
        visible={touched[name as keyof FormikErrors<unknown>]}
      />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
