/* eslint-disable no-unexpected-multiline */

import { FieldValues, useForm, FormProvider } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, TNormalForm } from "./validation";
import InputField from "./InputField";



const NormalForm = () => {
    const methods = useForm<TNormalForm>({
        resolver: zodResolver(SignupSchema)
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    }
        = methods

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    };

    console.log(watch('name'))

    const double = true;

    return (
        <FormProvider {...methods}>
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
                        <InputField />
                    </div>
                    <div className="w-full max-w-md">
                        <label
                            className="block w-full"
                            htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"  {...register('name')}

                        />
                        {errors.name && <span className="text-xs text-red-700">{errors.name.message}</span>}
                    </div>
                    <div className="w-full max-w-md">
                        <label
                            className="block"
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full" type="email" id="email"{...register('email')} />
                        {errors.email && <span className="text-xs text-red-700">{errors.email.message}</span>}
                    </div>
                    <div className="w-full max-w-md">
                        <label className="block " htmlFor="password">Password</label>
                        <input
                            className="w-full"
                            type="password"
                            id="password"
                            {...register('password', { minLength: 8 })}
                        />
                        {errors.password && <span className="text-xs text-red-700">{errors.password.message}</span>}
                    </div>
                    {/* <div className="w-full max-w-md">
                    <label className="block " htmlFor="name">Phone</label>
                    <input className="w-full" type="text" id="name"  {...register('name')} />
                </div> */}
                    {/* <div className="w-full max-w-md">
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
                </div> */}

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
        </FormProvider>
    );
};

export default NormalForm;