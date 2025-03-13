import ScrollWatcher from "./ScrollWatcher";
import { KeyboardArrowUp } from "@mui/icons-material";

const Copyright = () => {
    return (
        <div className="bg-[#112152] px-5">
            <ScrollWatcher>
                <KeyboardArrowUp className="text-blue-500" fontSize="medium" />
            </ScrollWatcher>
            <div className="border-t py-1 text-xs text-center text-white">
                &copy; 2024 Rockettarefund.org
            </div>
        </div>
    )
}

export default Copyright;