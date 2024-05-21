import * as Yup from "yup";
export const FormSchema = Yup.object({
  email: Yup.string().email().required("Please provide a valid email "),
});
