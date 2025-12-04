import type { FunctionComponent, InputHTMLAttributes } from "react"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
}

const CustomInput: FunctionComponent<IInputProps> = ({ error, ...props }) => {
    return (
        <>
            <input
                className={`bg-[#0F0F0F] placeholder:text-[#6c6c6c] p-3 rounded-md outline-none text-[#6c6c6c] border-2 w-full ${error ? 'border-red-500' : 'border-transparent'}`}
                {...props}
            />
            { error && <span className="text-xs text-red-500">{ error }</span> }
        </>
    )
}

export default CustomInput