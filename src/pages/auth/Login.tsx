import { useEffect, useState } from "react";
import { useTimeout } from "@/data/hooks/useTimeout";
import { useDinamicTitle } from "@/data/hooks/useDinamicTitle";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { DateService } from "@/data/service/date.service";


import { AtSign, Eye, EyeOff, KeyRound, Ungroup } from "lucide-react";

const Login = (): React.ReactElement => {
	useDinamicTitle("Login");
	const { toast } = useToast();
	const navigate: NavigateFunction = useNavigate();
	const dateService: DateService = new DateService();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	
	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		toast({
			title: "Welcome! Wait for auto redirect.",
			description: dateService.getCurrentDate(),
		});

		await useTimeout(2000);
		navigate("/"); 
	}

	useEffect(() => {
		toast({}).dismiss(); //RESET
	}, [])

	

  return (
		<>
			<div className="w-full h-lvh flex items-center justify-center bg-neutral-950">
				<div className="w-8/12 h-5/6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-row overflow-hidden">
					<div className="flex-1 p-3 bg-orange-600 bg-opacity-40 border-r border-neutral-800">
						<p className="font-semibold flex gap-3 items-center cursor-pointer" onClick={ () => navigate("/") }><Ungroup size={ 20 }/> Kernel Corp.</p>
					</div>
					<div className="flex-1 p-3 flex items-center justify-center relative">
						<Button variant="ghost" className="absolute top-4 right-4 font-bold hover:bg-orange-900" onClick={ () => navigate("/sign-up") }>Sign Up</Button>

						<div className="w-4/6 flex flex-col gap-12">
							<div className="flex flex-col justify-start items-start">
								<h1 className="font-extrabold text-2xl">Login</h1>
								<h2 className="font-bold text-sm text-neutral-500">Login with your account.</h2>
							</div>

							<form className="flex flex-col gap-10 w-full" onSubmit={ handleSubmit }>
								<div className="flex flex-col gap-6">
									<div className="flex flex-col gap-2">
										<Label htmlFor="email" className="font-bold relative left-1">E-Mail: <span className="text-orange-600">*</span></Label>
										<div className="flex flex-row w-full gap-2 items-center">
											<Input id="email" type="email" placeholder="Type your e-mail..." className="border border-neutral-500"/>
											<AtSign size={ 18 } className="text-neutral-400" />
										</div>
										<p className="text-neutral-400 text-xs font-semibold relative left-1">Ex.: name@example.com</p>
									</div>

									<div className="flex flex-col gap-2">
										<Label htmlFor="password" className="font-bold relative left-1">Password: <span className="text-orange-600">*</span></Label>
										<div className="flex flex-row w-full gap-2 items-center">
											<Input id="password" type={ showPassword ? "text" : "password"} placeholder="Type your password..." className="border border-neutral-500"/>
											<div onClick={ ():void => setShowPassword(!showPassword) }>
												{
													showPassword ?
														<EyeOff size={ 18 } className="text-neutral-400 cursor-pointer" />
													:
														<Eye size={ 18 } className="text-neutral-400 cursor-pointer" />
												}
											</div>
										</div>
										<p className="text-neutral-400 text-xs font-semibold relative left-1">Ex.: yourPassword123#</p>
									</div>
								</div>

								<div className="flex flex-col gap-4">
									<Button className="w-3/4 mx-auto flex items-center justify-center gap-3 bg-orange-700 hover:bg-orange-800 text-white font-extrabold"><KeyRound size={ 15 } className="relative top-[1px]" /> Login with account</Button>
									<div className="w-full flex items-center justify-center">
										<p className="w-4/6 text-center text-neutral-500 text-xs font-semibold">By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<Toaster />
		</>
  );
}

export { Login }
