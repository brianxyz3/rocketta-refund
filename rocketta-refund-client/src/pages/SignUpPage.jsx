import { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { signUpWithEmailAndPassword } from "../controller/authController";

const SignUpPage = () => {
    const originLocation = location.origin;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const errorStyle = { color: "red" }

    const validateForm = {
        firstName: {
            required: "First Name is Required"
        },
        lastName: {
            required: "Last Name is Required"
        },
        email: {
            required: "Email is Required"
        },
        password: {
            required: "Password is Required"
        },
        confirmPassword: {
            required: "Confirm Password is Required"
        },
        matchPassword: {
            required: "Password Must Match Confirm Password"
        },
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleEvtDefault = (evt) => {
        evt.preventDefault();
    };

    const handleRegister = async (data) => {
        try {
            if (data.password === data.confirmPassword) {
                const user = { ...data };
                const newUser = await signUpWithEmailAndPassword(user);

                if (newUser.token) {
                    toast.success("User Successfully Registered");
                    setTimeout(() => (location.assign(originLocation + "/")), 1500)
                }
            } else {
                toast.error("Password does not match");
            }
        } catch (err) {
            toast.error("Something Went Wrong. Try Again");
        }
    }

    return (
        <>
            <main className="flex flex-col justify-center h-dvh mt-20 mb-5 md:mt-24 md:mb-2">
                <div className="flex items-center justify-center md:justify-end border border-gray-400 rounded-lg mx-2 sm:mx-5 md:mx-8">
                    <div className="w-10/12 md:w-5/12 mt-4 mb-6 mx-2 md:mx-8 md:my-2 lg:mx-12">
                        <div className="mb-8">
                            <h3 className="font-bold text-2xl lg:text-3xl text-slate-900 mb-2">Sign up to join us</h3>
                            <p className="text-slate-600">Already a member? <Link className="md:mt-2 text-blue-400 hover:text-blue-500" to="/login">Login</Link></p>
                        </div>
                        <form onSubmit={handleSubmit(handleRegister)} >
                            <div className="flex flex-col gap-4">
                                <TextField error={Boolean(errors.firstName)} fullWidth size="small" label="First Name" variant="outlined" autoComplete="current-firstName" {...register("firstName", validateForm.firstName)} />
                                {errors.firstName && <span style={errorStyle}>{validateForm.firstName.required}</span>}


                                <TextField error={Boolean(errors.lastName)} fullWidth size="small" label="Last Name" variant="outlined" autoComplete="current-lastName" {...register("lastName", validateForm.lastName)} />
                                {errors.lastName && <span style={errorStyle}>{validateForm.lastName.required}</span>}


                                <TextField error={Boolean(errors.email)} fullWidth size="small" label="Email" type="email" variant="outlined" autoComplete="current-email" {...register("email", validateForm.email)} />
                                {errors.email && <span style={errorStyle}>{validateForm.email.required}</span>}


                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        error={Boolean(errors.password)}
                                        autoComplete="current-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
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
                                        {...register("password", validateForm.password)}
                                    />
                                </FormControl>
                                {errors.password && <span style={errorStyle}>{validateForm.password.required}</span>}


                                <TextField
                                    error={Boolean(errors.confirmPassword)}
                                    fullWidth
                                    size="small"
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    autoComplete="current-password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("confirmPassword", validateForm.confirmPassword)}
                                />
                                <div className="flex flex-col mb-5">
                                    <FormControlLabel control={<Checkbox />} label="Use Admin Mode" {...register("isAdmin")} />
                                    <FormControlLabel required control={<Checkbox />} label="Terms and Conditions" />
                                </div>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline hover:scale-105 duration-100"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="bgLoginImg bg-cover bg-center hidden md:flex rounded-r-lg md:w-1/2 min-h-full"></div>
                </div>
            </main>
        </>
    )
}

export default SignUpPage;