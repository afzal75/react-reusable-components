import { useFormContext } from "react-hook-form";

const InputField = () => {
    const { register, watch } = useFormContext()
    console.log(watch("Something"))
    return (
        <div>
            <input type="text" {...register("Something")} />
        </div>
    );
};

export default InputField;