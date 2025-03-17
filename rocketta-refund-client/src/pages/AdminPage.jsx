import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { TextField  } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AddAdmin from "../components/AddAdmin";
import { useNavigate } from "react-router";
import { useAuth } from "../authContext";
import { registerAdmin, updateUserPermission } from "../controller/apiController";


const AdminPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isExistiingUser, setIsExistiingUser] = useState(false);
  const {currentUser} = useAuth();
  const navigate = useNavigate();

  const headerObj = {
    authorization: currentUser.token,
    id: currentUser.id,
    admin: currentUser.isAdmin,
    "Content-Type": "application/json",
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


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

  const toggleIsExistiingUser = () => (setIsExistiingUser(prevState => (!prevState)))
  const handleEvtDefault = (evt) => {
    evt.preventDefault();
  };

  const handleRegister = async (data) => {
    try {
      if (data.password === data.confirmPassword) {
        const user = { ...data, isAdmin: true };
        const newAdmin = await registerAdmin(user, headerObj);

        if (newAdmin.id) {
          toast.success("Admin Successfully Registered");
          reset();
        }
      } else {
        toast.error("Password does not match");
      }
    } catch (err) {
      toast.error("Something Went Wrong. Try Again");
    }
  }

  const handleUpdateUserPerm = async (data) => {
    try {
      const user = { ...data };
      const newAdmin = await updateUserPermission(user, headerObj);

      if (newAdmin.permissionStatus) {
          toast.success("Admin Permission Added")
       } else {
          toast.success("Admin Permission Removed")
       }
      reset();
    } catch (err) {
      toast.error("Something Went Wrong. Try Again");
    }
  }

  useEffect(() => {
    if(!currentUser.isAdmin) navigate("/");
  }, []);

  return (
      <main>
      {
        isExistiingUser && currentUser.isAdmin ?
        <AddAdmin
            title="Edit User Admin Permission"
            desc="Not already a member?"
        descBtnText="Add Admin Profile"
        toggleFunc={toggleIsExistiingUser}
        >
          <form onSubmit={handleSubmit(handleUpdateUserPerm)} >
            <div className="mb-8">
              <TextField error={Boolean(errors.email)} fullWidth size="small" label="Email" type="email" variant="outlined" autoComplete="current-email" {...register("email", validateForm.email)} />
              {errors.email && <span style={errorStyle}>{validateForm.email.required}</span>}            
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline hover:scale-105 duration-100"
              type="submit"
            >
                Update Admin Permission
            </button>
          </form>
        </AddAdmin>
      : <AddAdmin
      title="Create New Admin Profile"
      desc="Already a member?"
      descBtnText="Edit User Profile"
      toggleFunc={toggleIsExistiingUser}
      >
        <form onSubmit={handleSubmit(handleRegister)} >
          <div className="flex flex-col gap-4 mb-5">
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
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline hover:scale-105 duration-100"
            type="submit"
          >
                Add Admin Profile
          </button>
        </form>
      </AddAdmin>
    }
    </main>
  )
}

export default AdminPage;