// import { twMerge } from "tailwind-merge"
// const Button = ({ className, variant }) => {
//     return (
//         <button className={twMerge(`bg-red-purple 
//         px-3 py-2 rounded-md ${className} 
//         ${variant == "solid" ?
//                 "border border-purple-500 bg-opacity-10" : ""}`)}>
//             Button
//         </button>
//     );
// };


// ! using CLSX




import { twMerge } from "tailwind-merge"
import { clsx } from "clsx";
import cn from "../../utils/cn";
const Button = ({ className, variant }) => {
    const getVariant = (variant) => {
        switch (variant) {
            case "outline":
                return "btn-outline"
            case "ghost":
                return "btn-ghost"

            default:
                return "btn-solid";
        }
    }
    return (
        <button className={cn(getVariant(variant), className)}
        >
            Button
        </button >
    );
};

export default Button;