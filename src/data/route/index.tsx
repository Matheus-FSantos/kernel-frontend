import { Home } from "@/pages";
import { Login } from "@/pages/auth/Login";
import { Error, IError } from "@/pages/error/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
	const error: IError = { status: "404", shortMessage: "Page not found!" }

  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/login" element={ <Login /> } />
				<Route path="*" element={<Error error={ error } />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
