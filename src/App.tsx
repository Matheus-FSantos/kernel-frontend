import { ThemeProvider } from "./components/theme-provider";
import { AppRoutes } from "./data/route";

const App = (): React.ReactElement => {
  return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<AppRoutes />
		</ThemeProvider>
	);
}

export { App };
