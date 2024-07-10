import { useState } from "react";
import { INewCommentButtonProps } from "@/data/interface/comments/new-comment-button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PostAvatar } from "../user/PostAvatar";
import { PostActions } from "../post/PostActions";
import { CircleFadingPlus, MegaphoneOff, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewCommentButton = ({ comment }: INewCommentButtonProps): React.ReactElement => {
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();	
	}

	return (
		<Sheet>
			<SheetTrigger>
				<PostActions
					type="comment"
					size="lg"
					content={ comment && 1 }
					tooltipContent="Comment"
				/>
			</SheetTrigger>
			<SheetContent className="flex flex-col gap-8 bg-neutral-950 border-neutral-800">
				<SheetHeader>
					<SheetTitle className="text-xl  font-black">Comments</SheetTitle>
				</SheetHeader>
				{
					comment ? (
						<div className="flex flex-col gap-2 h-full">
							<div className="flex justify-between">
								<PostAvatar user={ comment.user } type="sm" />
								<span className="text-xs font-bold text-neutral-400">{ comment.createdAt }</span>
							</div>
							<p className="w-full text-sm text-justify font-semibold">
								{ comment.content }
							</p>
							<PostActions
								type="like"
								size="sm"
								isActive={ isLiked }
								isClickable={ true }
								tooltipContent="Like"
								content={ isLiked ? 2 : 1 }
								onClick={ (): void => setIsLiked(!isLiked) }
							/>
						</div>
					) : (
						<p className="flex items-center justify-center gap-3 h-full text-sm font-black text-neutral-400">
							<MegaphoneOff size={ 20 } /> Nothing here...
						</p>
					)
				}
				<form className="w-full flex gap-2 items-center" onSubmit={ handleSubmit }>
					<Input id="password" type="text" placeholder="Add your comment" className="border border-neutral-500 placeholder:text-neutral-400 placeholder:font-semibold placeholder:opacity-70"/>
					<Button
						className="bg-orange-700 hover:bg-orange-800 text-white px-3"
						type="submit"
					>
						<CircleFadingPlus size={ 20 } />
					</Button>
				</form>
			</SheetContent>
		</Sheet>
	);
}

export { NewCommentButton };
