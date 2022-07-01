import * as Yup from "yup";

export const loginSchema = Yup.object({
	email: Yup.string()
		.email("Email must be a valid email address.")
		.required("This field is required."),
	password: Yup.string().required("This field is required."),
});
