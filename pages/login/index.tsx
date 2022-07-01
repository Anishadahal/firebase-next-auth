import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { FormInput } from "../../components/form-components/FormInput";
import SubmitButton from "../../components/form-components/SubmitButton";
import { useAuth } from "../../context/AuthContext";
import { DASHBOARD } from "../../utils/constant/routes.constant";
import { loginSchema } from "../../validations/login.validation";
import { toast } from "react-hot-toast";

const LoginPage = () => {
	type FormData = Yup.InferType<typeof loginSchema>;

	const { logIn } = useAuth();
	const router = useRouter();

	const methods = useForm<FormData>({ mode: "onBlur", resolver: yupResolver(loginSchema) });
	const {
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = methods;

	const onSubmit = async (data: FormData) => {
		const toastId = toast.loading("Logging in...");
		try {
			await logIn(data.email, data.password);
			toast.success("Successfully logged in!", { id: toastId });
			router.push(DASHBOARD);
		} catch (error: any) {
			toast.error(error.message, { id: toastId });
		}
	};

	return (
		<div className="sign-up-form container mx-auto w-96 mt-12 border-2 border-gray-400">
			<h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Log In</h2>
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
						formOptions={loginSchema.fields.email}
						errors={errors.email}
					/>
					<FormInput
						label="Password"
						name="password"
						type="password"
						formOptions={loginSchema.fields.password}
						errors={errors.password}
					/>
					<SubmitButton />
				</form>
			</FormProvider>
		</div>
	);
};

export default LoginPage;
