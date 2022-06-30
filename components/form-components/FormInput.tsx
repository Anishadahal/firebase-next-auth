import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

export const FormInput = ({
	label,
	name,
	type,
	formOptions,
	errors,
}: {
	label?: any;
	name?: string;
	type?: any;
	formOptions?: any;
	errors?: any;
}) => {
	const { register } = useFormContext();

	return (
		<>
			<div className="mt-8">
				{label && (
					<div className="flex items-center justify-between">
						<label htmlFor="" className="block mb-3 font-sans text-blue-900">
							{label}
						</label>
					</div>
				)}
				<>
					<input
						type={`${type ? type : "text"}`}
						{...register(name ? name : "", formOptions)}
						className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
					/>
				</>
			</div>
			<ErrorMessage name={errors} />
		</>
	);
};
