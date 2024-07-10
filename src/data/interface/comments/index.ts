import { IUser } from "../user";

export interface ICommentProps {
	comment: IComment
}
export interface IComment {
	user: IUser,
	content: string,
	createdAt: string,
}
