import React from "react";

const SubmitButton = () => {
	return (
		<div className="flex justify-center pt-8">
			<button
				type="submit"
				className={`h-12 text-center w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
			>
				<p className="capitalize text-white font-normal">submit</p>
			</button>
		</div>
	);
};

export default SubmitButton;
