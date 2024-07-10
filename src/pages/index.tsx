import { IUser } from "@/data/interface/post";
import { useDinamicTitle } from "@/data/hooks/useDinamicTitle";

import { Post } from "@/ui/components/post";
import { Header } from "@/ui/components/Header"
import { GlobalPadding } from "@/ui/components/GlobalPadding";

import { PostImage01PNG, PostImage02PNG, PostImage03PNG, PostImage04PNG } from "@/ui/assets/images";

const Home = (): React.ReactElement => {
	useDinamicTitle("Home");
	const user: IUser = {
		avatarUrl: "https://github.com/shadcn.png",
		profileName: "math__us",
		idName: "@matheuseus",
		fallbackName: "MF"
	}
	
	return (
		<div className="w-full h-full bg-neutral-950">
			<GlobalPadding>
				<div className="flex flex-col gap-10">
					<Header />
					<div className="w-full flex flex-col justify-center items-center gap-20 pb-10">
						<Post
							user={ user }
							createdAt="1 min ago"
							image={ PostImage01PNG }
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						/>

						<Post
							user={ user }
							createdAt="10 min ago"
							image={ PostImage02PNG }
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						/>

						<Post
							user={ user }
							createdAt="1 hour ago"
							image={ PostImage03PNG }
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						/>

						<Post
							user={ user }
							createdAt="Jun 8, 2024"
							image={ PostImage04PNG }
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						/>
					</div>
				</div>
			</GlobalPadding>
		</div>
	);
}

export { Home };
