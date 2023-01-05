import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppErrorMessage from "../components/AppErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/u-logo.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
            />
            <AppErrorMessage visible={touched.email} error={errors.email} />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              textContentType="password"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              secureTextEntry
            />
            <AppErrorMessage visible={touched.password} error={errors.password} />
            <AppButton title="Log In" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
