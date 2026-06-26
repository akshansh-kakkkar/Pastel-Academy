import { Loader2 } from "lucide-react";

export default function Loading(){
    return(
        <div className="flex flex-col justify-center items-center text-center min-h-[80vh]">
            <Loader2 className="animate-spin text-[#4b5a9c]" size={64}/>
        </div>
    )
}