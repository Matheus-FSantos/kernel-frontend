import { LogIn, Settings, UserRound } from "lucide-react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar = (): React.ReactElement => {
	const navigate: NavigateFunction = useNavigate();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="focus:outline-none">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png"/>
					<AvatarFallback>MF</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-neutral-900 border border-neutral-700">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-neutral-700"/>
				<DropdownMenuItem>
					<span className="flex flex-row items-center gap-2 font-semibold" onClick={ () => navigate("/profile") }><UserRound size={ 15 } /> Profile</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<span className="flex flex-row items-center gap-2 font-semibold" onClick={ () => navigate("/settings") }><Settings size={ 15 } /> Settings</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					{ /* <span className="text-red-500 font-black" onClick={ () => navigate("/logout") }>Logout</span> */ }
					<span className="flex flex-row items-center gap-2 text-orange-500 font-black" onClick={ () => navigate("/login") }><LogIn size={ 15 }/> Login</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export { ProfileAvatar }
