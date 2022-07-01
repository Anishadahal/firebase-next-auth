import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { DASHBOARD, HOME, LOGIN, SIGN_UP } from "../../utils/constant/routes.constant";
import { toast } from "react-hot-toast";

const Header = ({ children }: { children: React.ReactNode }) => {
	const { user, logOut } = useAuth();
	const router = useRouter();
	const menuItems = [
		{
			id: 1,
			name: "Home",
			link: HOME,
		},
		{
			id: 2,
			name: "Login",
			link: LOGIN,
		},
		{
			id: 3,
			name: "Sign Up",
			link: SIGN_UP,
		},
	];

	const handleLogout = async () => {
		const toastId = toast.loading("Logging out...");
		try {
			await logOut();
			toast.success("You are now logged out", { id: toastId });
			router.push(LOGIN);
		} catch (error: any) {
			toast.error(error.message, { id: toastId });
		}
	};
	return (
		<>
			<header className="flex flex-wrap container mx-auto max-w-full items-center p-6 justify-between bg-white shadow-md sticky top-0 z-50">
				<div className="flex items-center text-blue-900 hover:text-blue-800 cursor-pointer transition duration-150 ">
					<Link href={HOME}>
						<span className="font-semibold text-lg font-sans">
							Firebase Authentication Demo
						</span>
					</Link>{" "}
				</div>

				<nav className={`md:flex md:items-center font-title w-full md:w-auto`}>
					<ul className="text-lg inline-block">
						<>
							{!user ? (
								menuItems.map((item) => (
									<li
										key={item.id}
										className="my-3 md:my-0 items-center mr-4 md:inline-block block "
									>
										<Link href={item?.link}>
											<a
												href=""
												className="text-blue-800 hover:text-blue-900 transition"
											>
												{item?.name}
											</a>
										</Link>
									</li>
								))
							) : (
								<>
									<li className="my-3 md:my-0 items-center mr-4 md:inline-block block ">
										<Link href={DASHBOARD}>
											<a
												href=""
												className="text-blue-800 hover:text-blue-900 transition"
											>
												Dashboard
											</a>
										</Link>
									</li>
									<li className="my-3 md:my-0 items-center mr-4 md:inline-block block ">
										<a
											onClick={handleLogout}
											className="text-blue-800 hover:text-blue-900 transition cursor-pointer"
										>
											Logout
										</a>
									</li>
								</>
							)}
						</>
					</ul>
				</nav>
			</header>
			{children}
		</>
	);
};

export default Header;
