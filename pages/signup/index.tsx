import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../../components/form-components/FormInput";
import SubmitButton from "../../components/form-components/SubmitButton";
import { useAuth } from "../../context/AuthContext";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { signupSchema } from "../../validations/signup.validation";
import { useRouter } from "next/router";
import { DASHBOARD } from "../../utils/constant/routes.constant";

const SignUpPage = () => {
	type FormData = Yup.InferType<typeof signupSchema>;

	const { signUp } = useAuth();
	const router = useRouter();

	const methods = useForm<FormData>({ mode: "onBlur", resolver: yupResolver(signupSchema) });
	const {
		handleSubmit,
		formState: { errors, isSubmitting },
	} = methods;

	const onSubmit = async (data: FormData) => {
		const toastId = toast.loading("Signing up...");
		try {
			await signUp(data.email, data.password);
			toast.success("Successfully signed up!", { id: toastId });
			router.push(DASHBOARD);
		} catch (error: any) {
			toast.error(error.message, { id: toastId });
		}
	};
	return (
		<div className="sign-up-form container mx-auto w-96 mt-12 border-2 border-gray-400">
			<h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Sign Up</h2>
			<FormProvider {...methods}>
				<form
					action=""
					className="w-80 mx-auto pb-12 px-4"
					onSubmit={handleSubmit(onSubmit)}
				>
					<FormInput
						label="Email"
						name="email"
						type="email"
						formOptions={signupSchema.fields.email}
						errors={errors.email}
					/>
					<FormInput
						label="Password"
						name="password"
						type="password"
						formOptions={signupSchema.fields.password}
						errors={errors.password}
					/>
					<FormInput
						label="Confirm Password"
						name="confirm_password"
						type="password"
						formOptions={signupSchema.fields.confirm_password}
						errors={errors.confirm_password}
					/>
					<SubmitButton />
				</form>
			</FormProvider>
		</div>
	);
};

export default SignUpPage;
