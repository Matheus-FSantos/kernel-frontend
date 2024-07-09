import { Button } from "@/components/ui/button";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Home = (): React.ReactElement => {
	const navigate: NavigateFunction = useNavigate();
	
	return (
		<div className="w-full h-lvh flex items-center justify-center bg-neutral-950">
			<Button
				onClick={ (): void => navigate("/login") }
			>
				Login
			</Button>
		</div>
	);
}

export { Home };
