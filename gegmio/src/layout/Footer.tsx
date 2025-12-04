import type { FunctionComponent } from "react"

const Footer: FunctionComponent = () => {
    return (
        <footer className="bg-[#0F0F0F] w-full flex border-t-2 border-t-[#242424] justify-center">
            <div className="footer_wrapper text-white grid grid-cols-1 justify-between max-w-7xl w-full m-auto px-4 md:px-[100px] py-11 lg:grid-cols-2 gap-8">
                <div className="flex-1 flex flex-col gap-6">
                    <div className="logo font-bold text-2xl">
                        <img src="/images/gegmioLogo.svg" alt="Gegmio" />
                    </div>
                    <p className="footer_text mt-2.5 text-[#A7A7A7]">ჭვკიანი ჯავშნები აპლიკაცია და სისტემა რომელიც აკავშირებს ბიზნეს მომხმარებელთან და უგვარებს ყველა პრობლემას</p>

                    <div className="h-15 flex gap-5">
                        <a href="https://www.facebook.com/profile.php?id=61583853083725" target="_blank" className="w-14 h-full border-3 border-[#2b2b2b] rounded-full flex items-center justify-center">
                            <img src='/images/facebook-big.svg' alt="F" />
                        </a>
                        <a href="#" className="w-15 h-full border-3 border-[#2b2b2b] rounded-full flex items-center justify-center">
                            <img src='/images/tiktok-big.svg' alt="F" />
                        </a>
                        <a href="#" className="w-15 h-full border-3 border-[#2b2b2b] rounded-full flex items-center justify-center">
                            <img src='/images/Linkedin.svg' alt="F" />
                        </a>
                    </div>
                </div>

                <div className="links flex lg:justify-end gap-11">
                    <nav className="nav flex items-center">
                        <ul className="font-semibold text-sm flex flex-col gap-3">
                            <li><a href="#">კომპანია</a></li>
                            <li className="mt-2"><a href="#" className="text-[#A7A7A7] ">სახლი</a></li>
                            <li className="mt-2"><a href="#about" className="text-[#A7A7A7] ">ჩვენს შესახებ</a></li>
                            <li className="mt-2"><a href="#contact" className="text-[#A7A7A7] ">კონტაქტი</a></li>
                        </ul>
                    </nav>
                    <nav className="nav flex items-center">
                        <ul className="gap-3 flex flex-col font-semibold text-sm">
                            <li><a href="#">ინფორმაცია</a></li>
                            <li className="mt-2"><a href="/PrivacyPolicy" className="text-[#A7A7A7] ">წესები და პირობები</a></li>
                            <li className="mt-2"><a href="#about" className="text-[#A7A7A7] ">info@gegmio.com</a></li>
                            <li className="mt-2"><a href="#contact" className="text-[#A7A7A7] ">568-90-24-10</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

