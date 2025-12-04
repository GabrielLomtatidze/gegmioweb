import type { FunctionComponent } from "react"

import DownloadButton from "../button/DownloadButton"

const Landing: FunctionComponent = () => {
    return (
        <div id="#" className="flex items-center justify-between w-full gap-6 sm:gap-14 flex-col lg:flex-row">

            <div className="landing_left_side flex-1 flex flex-col gap-11 md:max-w-[1500px] w-full m-auto">
                <div className="flex flex-col gap-6 text-center max-w-[820px] w-full m-auto">
                    <div className="landing_left_side-headings text-center flex items-center justify-center w-full">
                        <p className="landing_left_side-heading-title text-[28px] sm:text-[40px] md:text-5xl sm:leading-[60px] text-center sm:items-start bg-linear-to-r from-[#FF3033] to-[#EF7800] bg-clip-text text-transparent font-bold">
                            დაჯავშნე მარტივად <span className="text-white">დაგეგმე ჭკვიანურად</span> 
                        </p>
                    </div>
                    <div className="landing_left_side-text text-center text-[#A7A7A7] font-normal text-xs max-w-[800px] w-full m-auto sm:text-base sm:text-start">
                        <p className="text-center">
                            რესტორნები, სილამაზის სალონები, სამედიცინო სერვისები, ფიტნეს ცენტრები, და ცხოველების მოვლის სერვისები - ყველაფერი ერთ სივრცეში. შეარჩიე სასურველი ადგილი და დრო ზარების გარეშე და დაჯავშნე წამებში Gegmio-ის გამოყენებით
                        </p>
                    </div>
                </div>
                <div className="landing_left_side-downloads flex items-start justify-center sm:justify-center w-full gap-3">
                    <DownloadButton image="/images/playStore.svg" platform="Play Store" />
                    <DownloadButton image="/images/ios.svg" platform="App Store" />
                </div>
                <div className="landing_middle_side-data flex flex-wrap justify-center gap-10 border-2 border-[#242424] rounded-3xl py-8 ">
                    <div className="flex-1 min-w-[200px] flex flex-col items-center justify-center gap-1 text-white">
                        <p className="data_number bg-clip-text text-[38px] font-bold flex items-center gap-3">
                        <img src="/images/rocket.svg" alt="Rocket" className="bg-[#242424] rounded-[12px] h-12 w-12 p-2.5" /> 10325+
                        </p>
                        <span className="data_text text-[#A7A7A7] font-semibold tracking-wide">ჯავშნების რაოდენობა</span>
                    </div>

                    <div className="flex-1 min-w-[200px] flex flex-col items-center justify-center gap-1 text-white">
                        <p className="data_number bg-clip-text text-[38px] font-bold flex items-center gap-3">
                        <img src="/images/people.svg" alt="Rocket" className="bg-[#242424] rounded-[12px] h-12 w-12 p-2.5" /> 3000+
                        </p>
                        <span className="data_text text-[#A7A7A7] font-semibold tracking-wide">მომხმარებელი</span>
                    </div>

                    <div className="flex-1 min-w-[200px] flex flex-col items-center justify-center gap-1 text-white">
                        <p className="data_number bg-clip-text text-[38px] font-bold flex items-center gap-3">
                        <img src="/images/earth.svg" alt="Rocket" className="bg-[#242424] rounded-[12px] h-12 w-12 p-2.5" /> 100+
                        </p>
                        <span className="data_text text-[#A7A7A7] font-semibold tracking-wide">ლოკაცია</span>
                    </div>
                </div>

            </div>  
        </div>
    )
}

export default Landing