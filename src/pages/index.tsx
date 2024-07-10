import { IUser } from "@/data/interface/user";
import { IComment } from "@/data/interface/comments";
import { useDinamicTitle } from "@/data/hooks/useDinamicTitle";

import { Post } from "@/ui/components/post";
import { Header } from "@/ui/components/Header";
import { GlobalPadding } from "@/ui/components/GlobalPadding";

import { PostImage01PNG, PostImage02PNG, PostImage03PNG, PostImage04PNG } from "@/ui/assets/images";
import { Toaster } from "sonner";

const Home = (): React.ReactElement => {
	useDinamicTitle("Home");
	const user: IUser = {
		avatarUrl: "https://avatars.githubusercontent.com/u/109228925?v=4",
		profileName: "math__us",
		idName: "@matheuseus",
		fallbackName: "MF"
	}
	
	const comment: IComment = {
		user: {
			avatarUrl: "https://avatars.githubusercontent.com/u/10137?v=4",
			profileName: "GhostlyWhisper",
			idName: "@ghooostly",
			fallbackName: "GW"
		},
		createdAt: "1 min ago",
		content: "Amazing!!! 😍 🌎"
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
							content="Finding moments of peace in nature is essential for my soul. This place is truly restorative. 🌿 #naturetherapy #peaceandquiet #findyourpeace"
							comment={ comment }
						/>

						<Post
							user={ user }
							createdAt="10 min ago"
							image={ PostImage02PNG }
							content="This place is just breathtaking. 😍 The colors, the light, the air... everything is just perfect. #naturelover #beautifulplaces #getoutside"
						/>

						<Post
							user={ user }
							createdAt="1 hour ago"
							image={ PostImage03PNG }
							content="Take a deep breath and soak in the beauty of nature. It's good for the soul. 🌎 #natureishealing #getoutside #exploremore"
						/>

						<Post
							user={ user }
							createdAt="Jun 8, 2024"
							image={ PostImage04PNG }
							content="Step into the unknown. The night is young, and the city is calling. 🤫 #TokyoNightlife"
						/>
					</div>

					<Toaster />
				</div>
			</GlobalPadding>
		</div>
	);
}

export { Home };
