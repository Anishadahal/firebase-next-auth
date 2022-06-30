export const ErrorMessage = ({ name }: { name: any }) => {
	return (
		<>
			<p className="text-red-500">{name?.message}</p>
		</>
	);
};
