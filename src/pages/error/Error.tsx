import { MoveLeft } from "lucide-react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { GlobalPadding } from "@/ui/components/GlobalPadding";

import styles from "@/ui/styles/error/error.module.scss";

interface IErrorProps {
	error: IError
}

export interface IError {
	status: "404" | "403"
	shortMessage: string
}

const Error = ({ error }: IErrorProps): React.ReactElement => {
	const navigate: NavigateFunction = useNavigate(); 

	return (
		<div className="w-full h-lvh flex justify-center items-center bg-neutral-950">
			<GlobalPadding>
				<div className="flex flex-col gap-3">
					<div className="flex justify-center items-center gap-4">
						<h1 className="font-semibold text-base">{ error.status }</h1>
						<div className="h-5 w-[2px] rounded-full bg-white"/>
						<h2 className="font-semibold text-base">{ error.shortMessage }</h2>
					</div>
					<div className={`${ styles.homeContainer } flex items-center justify-center gap-3 hover:cursor-pointer`} onClick={ () => navigate("/")}>
						<MoveLeft className="relative top-[0.45px]" size={ 16 }/>
						<span className="font-medium hover:underline">Go back</span>
					</div>
				</div>
			</GlobalPadding>
		</div>
	);
}

export { Error };
