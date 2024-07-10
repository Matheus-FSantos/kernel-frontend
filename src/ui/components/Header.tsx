import { Bell, House, Search } from "lucide-react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { ProfileAvatar } from "@/ui/components/ProfileAvatar";

const Header = (): React.ReactElement => {
	const navigate: NavigateFunction = useNavigate();

	return (
		<div className="py-4 flex flex-row justify-between">
			<p className="font-black text-lg cursor-pointer" onClick={ () => navigate("/") }>Kernel</p>
			<ul className="flex flex-row items-center gap-10">
				<li className="flex gap-2 items-center font-medium hover:cursor-pointer hover:opacity-75" onClick={ () => navigate("/") }><House size={ 18 } /> Home</li>
				<li className="flex gap-2 items-center font-medium hover:cursor-pointer hover:opacity-75" onClick={ () => navigate("/explore") }><Search size={ 18 }/> Explore</li>
				<li className="flex gap-2 items-center font-medium hover:cursor-pointer hover:opacity-75" onClick={ () => navigate("/notifications") }><Bell size={ 18 } /> Notifications</li>
			</ul>
			<ProfileAvatar />
		</div>
	);
}

export { Header };
