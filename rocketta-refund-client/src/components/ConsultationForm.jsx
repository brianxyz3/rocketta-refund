import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { submitCaseFile } from "../controller/apiController"
import { useState } from "react";
import Loader from "./Loader";
import { useAuth } from "../authContext";
import { useNavigate } from "react-router";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const lostAmount = [
    "",
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $40,000",
    "$40,000 - $80,000",
    "$80,000 - $100,000",
    "$100,000 - $150,000",
    "Over $150,000",
];

const ConsultationForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const navigate = useNavigate();

    const {currentUser, userLoggedIn} = useAuth();

    const headerObj = {
        authorization: currentUser.token,
        id: currentUser.id,
        "Content-Type": "application/json",
    }

    const errorStyle = { color: "red" };

    const [isUpdatingServer, setIsUpdatingServer] = useState(false);
    

    const validateForm = {
        firstName: {
            required: "First Name is Required",
        },
        lastName: {
            required: "Last Name is Required",
        },
        lostAmount: {
            required: "Select the range of Amount lost",
        },
        contactEmail: {
            required: "Contact Email is Required",
        }
    };

    const onSubmit = async (data) => {
        if(userLoggedIn) {
            setIsUpdatingServer(true);
            try {
                const res = await submitCaseFile(headerObj, data);
                res._id ?
                    toast.success("Case File Successfully Submitted")
                    : toast.error("Case File Submit Unsuccessful, Try Again");
                reset();
            } catch (err) {
                toast.error("Case File Submit Unsuccessful, Try Again");
            } finally {
                setIsUpdatingServer(false);
            }
        } else {
            return navigate("/login");
        }
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row md:gap-2">
                <div className="w-full">
                    <TextField {...register("firstName", validateForm.firstName)} error={Boolean(errors.firstName)} label="First Name" variant="outlined" required className="w-full bg-gray-100 border-none md:mt-0" />
                    {errors.firstName && <span style={errorStyle}>{validateForm.firstName.required}</span>}
                </div>
                <div className="w-full">
                    <TextField {...register("lastName", validateForm.lastName)} error={Boolean(errors.lastName)} label="Last Name" variant="outlined" required className="w-full bg-gray-100 border-none md:mt-0" />
                    {errors.lastName && <span style={errorStyle}>{validateForm.lastName.required}</span>}
                </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:gap-2">
                <div className="w-full">
                    <TextField {...register("contactPhone")} label="Phone Number" variant="outlined" className="w-full bg-gray-100 border-none mt-4 md:mt-0" />
                </div>
                <div className="w-full">
                    <TextField {...register("contactEmail", validateForm.contactEmail)} error={Boolean(errors.contactEmail)} type="email" label="Enter your E-mail" variant="outlined" required className="w-full bg-gray-100 border-none mt-4 md:mt-0" />
                    {errors.contactEmail && <span style={errorStyle}>{validateForm.contactEmail.required}</span>}
                </div>
            </div>

            <FormControl fullWidth className="bg-gray-100">
                <InputLabel id="type">How much did you invest ($)</InputLabel>
                <Select
                    required
                    {...register("lostAmount", validateForm.lostAmount)}
                    labelId="Amount"
                    input={<OutlinedInput label="How much did you invest ($)" />}
                    defaultValue=""
                    MenuProps={MenuProps}
                >
                    {lostAmount.map((amount, idx) => (
                        <MenuItem
                            key={idx}
                            value={amount}
                        >
                            {amount}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div className="mb-4">
                <TextField
                    {...register("description")}
                    fullWidth
                    id="outlined-multiline-static"
                    label="Outline your case"
                    className="bg-gray-100"
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </div>
            <button disabled={isUpdatingServer || !userLoggedIn} className={`bg-yellow-400 disabled:hover:scale-100 disabled:hover:translate-y-0 disabled:cursor-not-allowed text-gray-900 text-xl py-3 font-bold hover:scale-95 hover:rounded-lg hover:translate-y-2 hover:shadow-md duration-200`}>
                {isUpdatingServer ? (<Loader loading={isUpdatingServer} size={15} />) 
                :  userLoggedIn ? 
                "Get a free consultation"
                : "Sign in to submit case"}
            </button>
        </form>

    )
}

export default ConsultationForm;