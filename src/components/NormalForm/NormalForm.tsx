/* eslint-disable no-unexpected-multiline */

import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";

const NormalForm = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    };

    const double = true;

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={cn("w-full border border-gray-500 rounded-lg shadow-sm p-5 mx-auto", {
                "max-w-5xl": double,
                "max-w-md": !double,
            })}
        >
            <div
                className={cn
                    ("grid grid-cols-1 justify-items-center gap-5", { "md:grid-cols-2": double }
                    )}
            >
                <div className="w-full max-w-md">
                    <label className="block w-full" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"  {...register('name')} />
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Email</label>
                    <input className="w-full" type="text" id="name"  {...register('name')} />
                </div>
                <div className="w-full max-w-md">
                    <label className="block " htmlFor="name">Password</label>
                    <input className="w-full" type="text" id="name"  {...register('name')} />
                </div>
                {/* <div className="w-full max-w-md">
                    <label className="block " htmlFor="name">Phone</label>
                    <input className="w-full" type="text" id="name"  {...register('name')} />
                </div> */}
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Check</label>
                    <select>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                    </select>
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Text Area</label>
                    <textarea name="" id="" cols="5" rows="2"></textarea>
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Check Box</label>
                    <input
                        type="checkbox" name="" id="" />
                </div>

            </div>
            <div
                className={cn
                    ("grid grid-cols-1 justify-items-center gap-5 my-8",
                        {
                            "md:grid-cols-2": double
                        }
                    )}
            >
                <div
                    className="w-full 
                    max-w-md col-start-1 md:col-start-2 flex justify-end">
                    <Button className="w-full md:w-fit" type="submit">Submit</Button>
                </div>
            </div>
        </form>
    );
};

export default NormalForm;