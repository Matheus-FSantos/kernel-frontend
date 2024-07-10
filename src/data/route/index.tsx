import { Home } from "@/pages";
import { Login } from "@/pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
