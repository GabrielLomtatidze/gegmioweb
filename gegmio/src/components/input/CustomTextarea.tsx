import type { FunctionComponent, HtmlHTMLAttributes } from "react"

interface ICustomTextareaProps extends HtmlHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string
    error?: string
}

const CustomTextarea: FunctionComponent<ICustomTextareaProps> = ({ error, placeholder, ...props }) => {
    return (
        <>
            <textarea 
                className={`bg-[#0F0F0F] placeholder:text-[#6c6c6c] p-3 rounded-md outline-none text-[#6c6c6c] w-full h-[150px] border-2 resize-none ${error ? 'border-red-500' : 'border-transparent'}`}
                placeholder={ placeholder }
                { ...props }
            />       
            { error && <span className="text-xs text-red-500">{ error }</span> }
        </> 
    )
}

export default CustomTextarea
