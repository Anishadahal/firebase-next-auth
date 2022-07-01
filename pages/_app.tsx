import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import Header from "../components/header";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const { toasts } = useToasterStore();
	useEffect(() => {
		toasts
			.filter((t) => t.visible) // Only consider visible toasts
			.filter((_, i) => i >= 1) // Is toast index over limit
			.forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
	}, [toasts]);
	return (
		<>
			<Toaster position="bottom-right" reverseOrder={false} />
			<AuthContextProvider>
				<Header>
					<Component {...pageProps} />
				</Header>
			</AuthContextProvider>
		</>
	);
}

export default MyApp;
