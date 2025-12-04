"use client"
import type { FunctionComponent } from "react"

import { useForm } from "react-hook-form"

import CustomInput from "../input/CustomInput"
import CustomTextarea from "../input/CustomTextarea"

interface IFormData {
    fullname: string
    businessName: string
    email: string
    number: string
    message: string
}

const Contact: FunctionComponent = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormData>()

    const handleForm = async (data: IFormData) => {
        try {
            await fetch(process.env.VITE_FORM_ENDPOINT as string,  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            reset()
        } catch (err) {
            alert(`Something went wrong: ${ err }`)
        }
    }

    return (
        <div id="contact" className="contact_form_wrapper flex flex-col items-center gap-8">
            <div className="contact_form-heading text-center max-w-[490px] w-full flex flex-col gap-2">
                <div className="contact_form-title text-[32px] font-bold">დაგვიკავშირდი</div>
                <div className="contact_form-text font-light text-[#A7A7A7]">მზად ხარ მეტი შესაძლებლობებისთვის? დაგვიკავშირდით და მომენტალურად იგრძენი შედეგი</div>
            </div>

            <form onSubmit={handleSubmit(handleForm)} className="contact-form bg-[#171717] max-w-[700px] w-full p-6 md:py-8 md:px-8 rounded-lg flex flex-col gap-6">
                <div className="contact_form-inputs grid gap-y-6 gap-x-2.5 grid-cols-1 md:grid-cols-2">
                    <div className="contact-from_input-block">
                        <CustomInput
                            type="text"
                            placeholder="სრული სახელი"
                            {...register('fullname', { required: 'სრული სახელი სავალდებულოა'})}
                            error={errors.fullname?.message}
                        />
                    </div>
                    <div className="contact-from_input-block">
                        <CustomInput
                            type="text"
                            placeholder="ბიზნესის სახელი"
                            {...register('businessName', { required: 'ბიზნესის სახელი სავალდებულოა'})}
                            error={errors.businessName?.message}
                        />
                    </div>
                    <div className="contact-from_input-block">
                        <CustomInput
                            type="text"
                            placeholder="ელ-ფოსტა"
                            {...register('email', { 
                                required: 'ელ-ფოსტა სავალდებულოა',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "არა ვალიდური ელ-ფოსტა"
                                }
                            })}
                            error={errors.email?.message}
                        />
                    </div>
                    <div className="contact-from_input-block">
                        <CustomInput
                            type="text"
                            placeholder="ნომერი"
                            {...register('number', { 
                                required: 'ნომერი სავალდებულოა',
                                pattern: {
                                    value: /^\+?\d{9,14}$/,
                                    message: "არა ვალიდური ნომერია"
                                }
                            })}
                            error={errors.number?.message}
                        />
                    </div>
                </div>
                <div className="contact-form-textarea">
                    <CustomTextarea
                        placeholder="მოგვწერე შენი ბიზნესის შესახებ და დაგვისვი კითხვები"
                        {...register('message', { required: 'ტექსტური ველი სავალდებულოა' })}
                        error={errors.message?.message}
                    />
                </div>
                <div className="contact_form-submit-btn">
                    <button type="submit" className="w-full bg-linear-to-r from-[#FF3033] to-[#EF7800] text-white py-3 px-5 rounded-md cursor-pointer font-bold flex justify-center gap-2.5">
                        მესიჯის გაგზავნა
                        <img src="/images/plane.svg" alt=">" />
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Contact