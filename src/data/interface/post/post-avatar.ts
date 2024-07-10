import { IUser } from "@/data/interface/user";

export interface IPostAvatarProps {
	user: IUser,
	type: "sm" | "lg",
}
