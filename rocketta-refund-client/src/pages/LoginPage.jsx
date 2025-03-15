import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { logInWithEmailAndPassword } from "../controller/authController";
import Spinner from "../components/Spinner";

const LoginPage = () => {
    const originLocation = location.origin;
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleEvtDefault = (evt) => {
        evt.preventDefault();
    };

    const handleLogin = async (data) => {
        setIsLoading(true);
        try {
            const user = await logInWithEmailAndPassword(data);
            if (user?.token) {
                toast.success("Welcome Back");
                setTimeout(() => (location.assign(originLocation + "/")), 1000)
            } else {
                toast.error("Incorrect Login Details");
            }
        } catch (err) {
            return toast.error("Something went wrong. Try again");
        } finally {
            setIsLoading(false);
        }
    }


    return (<>
        <main className="h-dvh flex flex-col justify-center">
            <div className="flex items-center justify-center md:justify-end border border-gray-400 rounded-lg mx-2 sm:mx-5 md:mx-8">
                <div className="w-10/12 md:w-5/12 py-12 lg:py-4 lg:m-8 xl:m-12">
                    <div className="mb-9">
                        <h3 className="font-bold text-2xl text-slate-900 mb-2 lg:text-3xl">Sign in to your account</h3>
                        <p className="text-slate-600">Not a member? <Link className="md:mt-2 text-blue-400 hover:text-blue-500" to="/signup">Sign Up</Link></p>
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="flex flex-col gap-8">
                            <TextField fullWidth error={Boolean(errors.email)} size="small" label="Email" variant="outlined" autoComplete="email" {...register("email", { required: true })} />

                            <FormControl fullWidth variant="outlined" size='small'>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    error={Boolean(errors.password)}
                                    {...register("password", { required: true })}
                                    id="password"
                                    autoComplete="current-password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? "hide the password" : "display the password"
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleEvtDefault}
                                                onMouseUp={handleEvtDefault}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>



                            <div className="flex justify-between mb-5">
                                <div>
                                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                                </div>
                                <a className="md:mt-2 text-blue-400 hover:text-blue-500 text-right" href="">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="flex">
                        <button
                            disabled={isLoading}
                            className="bg-blue-500 disabled:cursor-not-allowed disabled:hover:scale-100 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline hover:scale-105 duration-100"
                            type="submit"
                        >
                            Login
                        </button>
                        
                            {isLoading && <div className="w-fit ms-3"><Spinner loading={isLoading} /></div>}
                        </div>
                    </form>
                </div>
                <div className="bgLoginImg bg-cover bg-bottom h-full hidden md:flex rounded-r-lg md:w-6/12 lg:bg-center"></div>
            </div>
        </main>
    </>
    )
}

export default LoginPage;