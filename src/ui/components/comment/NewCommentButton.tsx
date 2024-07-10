import { toast } from "sonner";
import { useState } from "react";
import { CircleFadingPlus, MegaphoneOff } from "lucide-react";
import { INewCommentButtonProps } from "@/data/interface/comments/new-comment-button";

import {
	Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Comment } from "@/ui/components/comment";
import { PostActions } from "@/ui/components/post/PostActions";

const NewCommentButton = ({ comment }: INewCommentButtonProps): React.ReactElement => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [inputComment, setInputComment] = useState<string>("");

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		setIsActive(false);
		toast(`Comment added  🎉`, {
			description: "Wednesday, July 10, 2024 at 5:00 PM",
		});
		setInputComment("");
	}

	return (
		<>
			<Sheet>
				<SheetTrigger>
					<PostActions
						type="comment"
						size="lg"
						content={ comment && 1 }
						tooltipContent="Comment"
						onClick={ ():void => setIsActive(false) }
					/>
				</SheetTrigger>
				<SheetContent className="flex flex-col gap-7 bg-neutral-950 border-neutral-800">
					<SheetHeader>
						<SheetTitle className="text-xl  font-black">Comments</SheetTitle>
					</SheetHeader>
					{
						comment ? (
							<div className="h-full flex flex-col gap-6 overflow-auto no-scrollbar">
								{ Array.from({ length: 3 }).map((_, index) => <Comment key={ index } comment={ comment } />) }
							</div>
						) : (
							<p className="flex items-center justify-center gap-3 h-full text-sm font-black text-neutral-400">
								<MegaphoneOff size={ 20 } /> Nothing here...
							</p>
						)
					}
					{
						isActive ? (
							<form className="w-full flex gap-2 items-center" onSubmit={ handleSubmit }>
								<Input
									type="text"
									value={ inputComment }
									placeholder="Write something"
									onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setInputComment(e.target.value) }
									className="border border-neutral-500 placeholder:text-neutral-400 placeholder:font-semibold placeholder:opacity-70"
								/>
								<Button
									className="bg-orange-700 hover:bg-orange-800 text-white px-3"
									type="submit"
								>
									<CircleFadingPlus size={ 20 } />
								</Button>
							</form>
						) : (
							<div className="w-full h-10">
								<p className="text-center text-sm cursor-pointer font-bold text-orange-400 hover:text-orange-500" onClick={ (): void => setIsActive(true) }>Add comment</p>
							</div>
						)
					}
				</SheetContent>
			</Sheet>
		</>
	);
}

export { NewCommentButton };
