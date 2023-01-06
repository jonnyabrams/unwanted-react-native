import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import IconPickerItem from "../components/IconPickerItem";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Cameras", value: 4, backgroundColor: "blue", icon: "lock" },
  { label: "Cameras", value: 5, backgroundColor: "blue", icon: "lock" },
  { label: "Cameras", value: 6, backgroundColor: "blue", icon: "lock" },
  { label: "Cameras and Cameras", value: 7, backgroundColor: "blue", icon: "lock" },
  { label: "Cameras", value: 8, backgroundColor: "blue", icon: "lock" },
  { label: "Cameras", value: 9, backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField
          name="price"
          maxLength={8}
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          // numberOfColumns={3}
          // PickerItemComponent={IconPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          name="description"
          multiline
          numberOfLines={3}
          maxLength={255}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
