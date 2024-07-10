import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const Preload = (): React.ReactElement => {
	return (
		<div className="w-full h-lvh flex items-center justify-center bg-neutral-950">
			<div className="w-9 h-auto borde flex items-center justify-center">
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 200 263"
					className="w-full h-auto overflow-visible stroke-white stroke-2 rounded-full animate-pulse duration-1500"
				>
					<motion.path
						d="M0 262.839V0H58.8339V129.27L121.673 70.0824H181.449L107.362 150.177L200 262.721L132.744 262.839L71.0836 187.75L58.8339 200.589L58.7161 262.839H0Z"
						variants={ icon }
						initial="hidden"
						animate="visible"
						transition={{
							default: { duration: 2, ease: "easeInOut" },
							fill: { duration: 2, ease: [1, 0, 0.8, 1] }
						}}
					/>
				</motion.svg>
			</div>
		</div>
	);
}

export { Preload };
