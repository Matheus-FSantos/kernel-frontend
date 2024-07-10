import { useState } from "react";
import { CircleArrowUp, Send } from "lucide-react";
import { IPostProps } from "@/data/interface/post";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PostOptions } from "@/ui/components/post/PostOptions";

const Post = ({ user, image, content, createdAt }: IPostProps): React.ReactElement => {
	const [isFullText, setIsFullText] = useState<boolean>(false);
	const [isLiked, setIsLiked] = useState<boolean>(false);

	return(
		<div className="flex flex-col gap-4 max-w-[400px]">
			<div className="flex justify-between">
				<div className="flex items-center gap-4">
					<Avatar>
						<AvatarImage src={ user.avatarUrl } alt={`Kernel ${ user.idName } avatar `} />
						<AvatarFallback>{ user.fallbackName }</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<span className="text-lg font-black">{ user.profileName }</span>
						<span className="font-medium text-neutral-400">{ user.idName }</span>
					</div>
				</div>
				<div className="flex gap-3 relative top-[2px]" >
					<span className="text-xs font-bold text-neutral-400">{ createdAt }</span>
					<PostOptions />
				</div>
			</div>
			<p
				onClick={ (): void => setIsFullText(!isFullText) }
				className={
					isFullText ? (
						"w-full text-justify cursor-pointer font-semibold hover:opacity-90"
					) : (
						"w-full text-justify cursor-pointer font-semibold line-clamp-2 hover:opacity-90"
					)
				}
			>
				{ content }
			</p>
			<img src={ image } alt="Kernel: Post image" className="w-full h-auto cursor-pointer" />
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2 cursor-pointer" onClick={ () => setIsLiked(!isLiked) }>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<CircleArrowUp
									size={ 25 }
									stroke={ isLiked ? "#ea580c" : "#ffffff" }
								/>
							</TooltipTrigger>
							<TooltipContent side="right" className="rounded-full bg-neutral-600">
								<p className="text-white font-bold">Like</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<span className="text-xl font-bold relative bottom-[1px]">{ isLiked ? 2 : 1 }</span>
				</div>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Send
								size={ 25 }
								className="cursor-pointer active:text-orange-600"
							/>
						</TooltipTrigger>
						<TooltipContent side="right" className="rounded-full bg-neutral-600">
							<p className="text-white font-bold overflow-hidden">Share</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
}

export { Post };
