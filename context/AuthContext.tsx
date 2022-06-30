import React, { createContext, useContext, useEffect, useState } from "react";
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					displayName: user.displayName,
					email: user.email,
					uid: user.uid,
				});
			} else {
				setUser(null);
			}
		});
		setLoading(false);

		return () => unsubscribe();
	}, []);

	const signUp = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logIn = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = async () => {
		setUser(null);
		await signOut(auth);
	};

	return (
		<AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
