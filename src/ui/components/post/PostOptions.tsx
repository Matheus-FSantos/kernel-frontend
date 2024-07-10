import { EllipsisVertical, Send, TriangleAlert } from "lucide-react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PostOptions = (): React.ReactElement => {
	const navigate: NavigateFunction = useNavigate();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="h-6 focus:outline-none">
				<EllipsisVertical size={ 18 } className="cursor-pointer  hover:opacity-90" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-neutral-900 border border-neutral-700">
				<DropdownMenuLabel>Options</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-neutral-700"/>
				<DropdownMenuItem>
					<span className="flex flex-row items-center gap-2  font-black" onClick={ () => navigate("/") }>
						<Send size={ 15 } />
						Share
					</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<span className="flex flex-row items-center gap-2 text-red-500 font-black" onClick={ () => navigate("/") }>
						<TriangleAlert size={ 15 } />
						Report post
					</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export { PostOptions };
