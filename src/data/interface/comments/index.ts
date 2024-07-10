import { IUser } from "../user";

export interface IComment {
	user: IUser,
	content: string,
	createdAt: string,
}
