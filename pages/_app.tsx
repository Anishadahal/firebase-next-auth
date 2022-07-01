import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContextProvider>
			<Header>
				<Component {...pageProps} />
			</Header>
		</AuthContextProvider>
	);
}

export default MyApp;
