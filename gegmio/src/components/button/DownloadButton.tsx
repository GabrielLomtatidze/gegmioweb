import type { FunctionComponent } from "react"

interface IDownloadButtonProps {
    image: string
    platform: string
}

const DownloadButton: FunctionComponent<IDownloadButtonProps> = ({ image, platform }) => {
    return (
        <a href="#" className="landing_left_side-downloads_btn max-w-[200px] w-full flex items-center px-5 py-2.5 border border-[#2B2B2B] rounded-[12px] gap-4">
            <div className="image">
                <img src={ image } alt={ platform } />
            </div>
            <div className="text">
                <p className="text_1 text-[10px] sm:text-xs">Download on the</p>
                <p className="text_2 text-lg font-semibold">{ platform }</p>
            </div>
        </a>
    )
}

export default DownloadButton
