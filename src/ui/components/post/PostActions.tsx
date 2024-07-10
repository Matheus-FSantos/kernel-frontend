import {
	Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleArrowUp, MessageCircleMore, SendToBack } from "lucide-react";

interface IPostActionsProps {
	content?: number,
	size: "sm" | "lg",
	isActive?: boolean,
	className?: string,
	onClick?: () => void,
	isClickable?: boolean,
	tooltipContent: string,
	type: "like" | "share" | "comment"
}

const PostActions = ({ type, size, content, className, tooltipContent, isActive, onClick }: IPostActionsProps): React.ReactElement => {
	const handleClick = () => {
		if(onClick)
			onClick()
	}

	return (
		<div className="flex items-center gap-2 cursor-pointer" onClick={ ():void => handleClick() }>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						{
							type === "like" ? (
								<CircleArrowUp
									className={ className && className }
									size={ size === "lg" ? 25 : 18 }
									stroke={ isActive ? "#ea580c" : "#ffffff" }
								/>
							) : (
								type === "share" ? (
									<SendToBack
										size={ size === "lg" ? 25 : 18 }
										className="cursor-pointer active:text-orange-600 relative top-[2px]"
									/>
								) : (
									<MessageCircleMore
										size={ size === "lg" ? 28 : 21 }
										className="cursor-pointer active:text-orange-600"
									/>
								)
							)
						}
						
					</TooltipTrigger>
					<TooltipContent side="right" className="rounded-full bg-neutral-600">
						<p className="text-white font-bold">{ tooltipContent }</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			{
				content && <span className={ size === "lg" ? "text-xl text-white font-bold" : "text-xs text-white font-bold" }>{ content }</span>
			}
		</div>
	)
}

export { PostActions };
