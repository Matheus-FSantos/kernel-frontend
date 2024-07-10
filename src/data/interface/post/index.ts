import { IComment } from "../comments";
import { IUser } from "../user";

export interface IPostProps {
	user: IUser,
	image: string,
	content: string,
	createdAt: string,
	comment?: IComment,
}
