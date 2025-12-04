import type { FunctionComponent } from "react"



const Opportunities: FunctionComponent = () => {
    return (
        <div id="demo" className="opportunities_wrapper flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center w-full">
            <div className="opportunities_text_side flex flex-col gap-8 max-w-[700px] w-full">
                <div className="opportunities_heading flex flex-col gap-2">
                    <div className="opportunities_heading-title text-[32px] font-bold">
                        <span className="bg-gradient-to-r from-[#FF3033] to-[#EF7800] bg-clip-text text-transparent">შესაძლებლობები</span> თანამედროვე ბიზნესისთვის
                    </div>
                    <div className="opportunities_heading-text text-[#a7a7a7]">
                        შედეგზე ორიენტირებული მარკეტინგი, ანალიტიკა, ჯავშნები, ნაკლები ხარჯი, ინტუიტიური სისტემა
                    </div>
                </div>
                <div className="opportunities_list">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <li className="flex gap-2 font-semibold">
                            <img src="/images/calendar_icon.svg" alt=""/>ჯავშნების მართვა
                        </li>
                        <li className="flex gap-2 font-semibold">
                            <img src="/images/analytic_icon.svg" alt=""/> ანალიტიკა და შედეგები
                        </li>
                        <li className="flex gap-2 font-semibold">
                            <img src="/images/team_icon.svg" alt=""/> მომხმარებელთა ბაზა
                        </li>
                        <li className="flex gap-2 font-semibold">
                            <img src="/images/club_icon.svg" alt=""/> დროის ოპტიმიზირება
                        </li>
                    </ul>
                </div>
                <a href="#contact" className="contact_us-button bg-gradient-to-r from-[#FF3033] to-[#EF7800] w-max py-3 px-5 rounded-sm cursor-pointer">
                    დაგვიკავშირდი
                </a>
            </div>
            <div className="opportunities_demo">
                <img src="/images/calendar_demo.svg" alt="" className="h-auto lg:h-[332px] w-full" />
            </div>
        </div>
    )
}

export default Opportunities