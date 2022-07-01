import React from "react";
import ProtectedRoute from "../../components/protected-route";

const DashboardPage = () => {
	return (
		<ProtectedRoute>
			<div>You are logged in!</div>
		</ProtectedRoute>
	);
};

export default DashboardPage;
