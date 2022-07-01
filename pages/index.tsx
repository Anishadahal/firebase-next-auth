import type { NextPage } from "next";
import Link from "next/link";
import { DASHBOARD } from "../utils/constant/routes.constant";

const Home: NextPage = () => {
	return (
		<div className="flex py-2 container mx-auto">
			<div className="text-gray-600 border border-gray-400 rounded-md px-12 py-24 mt-24 overflow-y-hidden mx-auto">
				<h2 className="text-2xl font-semibold">
					This is a demo project for firebase authentication with NextJS
				</h2>
				<div className="flex mx-auto pt-12 pb-0">
					<Link href={DASHBOARD}>
						<button
							type="button"
							className="bg-blue-800 hover:bg-blue-700 hover:shadow-lg transition text-white px-4 py-2 rounded-md mx-auto"
						>
							Go to dashboard
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
