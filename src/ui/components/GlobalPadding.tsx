import { IGlobalPaddingProps } from "@/data/interface/global-padding";

const GlobalPadding = ({ children }: IGlobalPaddingProps): React.ReactElement => {
	return (
		<div className="px-20">
			{
				children
			}
		</div>
	);
}

export { GlobalPadding };
