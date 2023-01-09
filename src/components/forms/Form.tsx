import { Formik } from "formik";

import { InitialFormValuesType } from "../../typings";

interface IProps {
  initialValues: InitialFormValuesType;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: React.ReactNode;
}

const Form = ({
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

export default Form;
