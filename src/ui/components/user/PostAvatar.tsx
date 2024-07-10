import { IPostAvatarProps } from "@/data/interface/post/post-avatar";

import {
	Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const PostAvatar = ({ user, type }: IPostAvatarProps): React.ReactElement => {
	return (
		<div className="flex items-center gap-2">
			<Avatar className={ type === "sm" ? "w-7 h-auto": "" }>
				<AvatarImage src={ user.avatarUrl } alt={`Kernel ${ user.idName } avatar `} />
				<AvatarFallback>{ user.fallbackName }</AvatarFallback>
			</Avatar>
			<div className="flex flex-col">
				<span className={ type === "sm" ? "text-sm font-black" : "text-lg font-black" }>{ user.profileName }</span>
				<span className={ type === "sm" ? "text-xs font-bold text-neutral-400" : "font-bold text-neutral-400" }>{ user.idName }</span>
			</div>
		</div>
	);
}

export { PostAvatar };
