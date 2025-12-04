import type { FunctionComponent } from "react"

import ResultCard from "../card/ResultCard"

import { Bell, Calendar, ClockFading, Users, type LucideIcon } from "lucide-react"

interface IResult {
    Icon: LucideIcon
    title: string
    desc: string
}

const Results: FunctionComponent = () => {

    const results: IResult[] = [
        {
            title: 'ჭკვიანი ჯავშნების სისტემა',
            desc: 'ჯავშნების კონტროლი ასეთი ადვილი ჯერ არასდროს ყოფილა',
            Icon: Calendar
        },
        {
            title: 'ადგილების კონტროლი',
            desc: 'რეალურ დროში ადგილების კონტროლი მომხმარებლის მოსაზიდად',
            Icon: ClockFading
        },
        {
            title: 'ჯავშნებზე შეხსენების ფუნქცია',
            desc: 'ავტომატური შეხსენება ყველა ჯავშანზე, გარანტირებული ვიზიტისთვის',
            Icon: Bell
        },
        {
            title: 'სივრცის ორგანიზება',
            desc: 'მიიღე მაქსიმუმი ბიზნესისგან, არანაირი გამოტოვებული  და მომლოდინე ჯავშნები',
            Icon: Users
        },
        {
            title: 'ბიზნესის ტიპები',
            desc: 'ყველა ბიზნესისთვის: სალონი, რესტორანი, ცხოველების მოვლა და სხვა...',
            Icon: Users
        }
    ]

    return (
        <div className="results_wrapper flex flex-col items-center gap-8">
            <div className="results_heading text-center flex flex-col gap-2">
                <div className="results_heading-title text-[32px] font-bold">
                    <span className="bg-linear-to-r from-[#FF3033] to-[#EF7800] bg-clip-text text-transparent">შედეგზე</span> ორიენტირებული სისტემა
                </div>
                <div className="results_heading-text text-[#a7a7a7] max-w-[900px] w-full">
                    ყველაფერი რაც გჭირდება წარმატებისთვის: საუკეთესო სერვისი, გაციფრულებული ბიზნესი, მეტი მომხმარებელი, მეტი შემოსავალი და რაც მთავარია, შესანისნავი პირობები,
                    <a href="#contact" className="bg-linear-to-r from-[#FF3033] to-[#EF7800] bg-clip-text text-transparent font-bold"> დაგვიკავშირდი</a>
                </div>
            </div>
            <div className="results_list flex flex-wrap gap-6 justify-center">
                {results.map((result, index) => (
                    <ResultCard
                        key={index}
                        title={result.title}
                        desc={result.desc}
                        Icon={result.Icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default Results