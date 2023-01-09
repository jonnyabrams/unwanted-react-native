import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import IconPickerItem from "../components/IconPickerItem";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Cameras", value: 4, backgroundColor: "blue", icon: "lock" },
  { label: "Cameras", value: 5, backgroundColor: "blue", icon: "lock" },
  { label: "Cameras", value: 6, backgroundColor: "blue", icon: "lock" },
  {
    label: "Cameras and Cameras",
    value: 7,
    backgroundColor: "blue",
    icon: "lock",
  },
  { label: "Cameras", value: 8, backgroundColor: "blue", icon: "lock" },
  { label: "Cameras", value: 9, backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = () => {
  const location = useLocation();

  const handleSubmit = async (listing: any) => {
    const result = await listingsApi.addListing({ ...listing, location });
    if (!result.ok) return alert("Could not add listing");

    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField name="title" maxLength={255} placeholder="Title" />
        <FormField
          name="price"
          maxLength={8}
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={IconPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          name="description"
          multiline
          numberOfLines={3}
          maxLength={255}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
