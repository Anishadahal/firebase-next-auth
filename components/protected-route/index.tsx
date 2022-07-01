import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { LOGIN } from "../../utils/constant/routes.constant";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const { user } = useAuth();

	useEffect(() => {
		if (!user) {
			router.push(LOGIN);
		}
	}, [router, user]);
	return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
