export interface IPostProps {
	user: IUser,
	image: string,
	content: string,
	createdAt: string
}

export interface IUser {
	avatarUrl: string,
	idName: string,
	profileName: string,
	fallbackName: string,
	
}
