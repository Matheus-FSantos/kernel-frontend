import { useState } from "react";
import { IPostProps } from "@/data/interface/post";
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { PostAvatar } from "@/ui/components/user/PostAvatar";
import { PostActions } from "@/ui/components/post/PostActions";
import { PostOptions } from "@/ui/components/post/PostOptions";
import { NewCommentButton } from "@/ui/components/comment/NewCommentButton";

const Post = ({ user, image, content, createdAt, comment }: IPostProps): React.ReactElement => {
	const [isFullText, setIsFullText] = useState<boolean>(false);
	const [isLiked, setIsLiked] = useState<boolean>(false);

	return(
		<div className="flex flex-col gap-4 max-w-[400px]">
			<div className="flex justify-between">
				<PostAvatar user={ user } type="lg" />
				<div className="flex gap-3 relative top-[2px]" >
					<span className="text-xs font-bold text-neutral-400">{ createdAt }</span>
					<PostOptions />
				</div>
			</div>
			<p
				onClick={ (): void => setIsFullText(!isFullText) }
				className={
					isFullText ? (
						"w-full cursor-pointer font-semibold hover:opacity-90"
					) : (
						"w-full cursor-pointer font-semibold line-clamp-2 hover:opacity-90"
					)
				}
			>
				{ content }
			</p>
			<PhotoProvider
				speed={ () => 500 }
				maskOpacity={ 0.9 }
			>
				<PhotoView src={ image }>
					<img src={ image } alt="Kernel: Post image" className="w-full h-auto cursor-pointer" onDoubleClick={ () => setIsLiked(true) }/>
				</PhotoView>
			</PhotoProvider>
			<div className="flex items-center gap-4">
				<PostActions
					type="like"
					size="lg"
					className={ isLiked ? "animate-ping" : ""}
					isActive={ isLiked }
					isClickable={ true }
					tooltipContent="Like"
					content={ isLiked ? 2 : 1 }
					onClick={ (): void => setIsLiked(!isLiked) }
				/>
				<NewCommentButton
					comment={ comment }
				/>
				<PostActions
					type="share"
					size="lg"
					tooltipContent="Share"
				/>
			</div>
		</div>
	);
}

export { Post };
