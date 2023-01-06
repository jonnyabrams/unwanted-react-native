import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1},
  { label: "Clothing", value: 2},
  { label: "Cameras", value: 3},
]

const ListingEditScreen = () => {
  return <Screen>
    <AppForm
      initialValues={{
        title: "",
        price: "",
        description: "",
        category: null
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
  </Screen>;
};

export default ListingEditScreen;

const styles = StyleSheet.create({});
