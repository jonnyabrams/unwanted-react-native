import { Formik } from "formik";

interface IProps {
  initialValues: InitialFormValuesType;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: React.ReactNode;
}

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: IProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
