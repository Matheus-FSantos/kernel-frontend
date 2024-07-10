import { useState } from "react";

import { PostAvatar } from "@/ui/components/user/PostAvatar";
import { PostActions } from "@/ui/components/post/PostActions";
import { ICommentProps } from "@/data/interface/comments";

const Comment = ({ comment }: ICommentProps): React.ReactElement => {
	const [isLiked, setIsLiked] = useState<boolean>(false);

	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between">
				<PostAvatar user={ comment.user } type="sm" />
				<span className="text-xs font-bold text-neutral-400">{ comment.createdAt }</span>
			</div>
			<p className="w-full text-sm font-semibold" onDoubleClick={ (): void => setIsLiked(true) }>
				{ comment.content }
			</p>
			<PostActions
				type="like"
				size="sm"
				className={ isLiked ? "animate-ping" : ""}
				isActive={ isLiked }
				isClickable={ true }
				tooltipContent="Like"
				content={ isLiked ? 2 : 1 }
				onClick={ (): void => setIsLiked(!isLiked) }
			/>
		</div>
	);
}

export { Comment };
