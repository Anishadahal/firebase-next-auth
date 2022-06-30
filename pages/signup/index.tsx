import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../../components/form-components/FormInput";
import SubmitButton from "../../components/form-components/SubmitButton";
import { useAuth } from "../../context/AuthContext";

interface authType {
	email: string;
	password: string;
}
const SignUpPage = () => {
	const { user, signUp } = useAuth();
	console.log({ user });
	
	const methods = useForm<authType>();
	const {
		handleSubmit,
		formState: { errors, isSubmitting },
	} = methods;

	const formOptions = {
		email: {
			required: "This field is required",
		},
		password: {
			required: "This field is required",
			minLength: {
				value: 6,
				message: "Password must be at least 6 characters",
			},
		},
	};

	const onSubmit = async (data: authType) => {
		console.log({ data });
		try {
			await signUp(data.email, data.password);
		} catch (error: any) {
			console.log(error.message);
		}
	};
	return (
		<div className="sign-up-form container mx-auto w-96 mt-12 border-2 border-yellow-300">
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
						formOptions={formOptions.email}
						errors={errors.email}
					/>
					<FormInput
						label="Password"
						name="password"
						type="password"
						formOptions={formOptions.password}
						errors={errors.password}
					/>
					<SubmitButton />
				</form>
			</FormProvider>
		</div>
	);
};

export default SignUpPage;
