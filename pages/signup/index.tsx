import React from "react";
import { useAuth } from "../../context/AuthContext";

const SignUpPage = () => {
	const { user, signUp } = useAuth();
	return <div>SignUpPage</div>;
};

export default SignUpPage;
