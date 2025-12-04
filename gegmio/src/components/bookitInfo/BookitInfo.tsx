import type { FunctionComponent } from "react"

import BookitInfoCard from "../card/BookitInfoCard"

import { Bell, ClockFading, Heart, MapPin, Smartphone, type LucideIcon } from "lucide-react"

interface IBookitInfoCard {
    Icon: LucideIcon
    title: string
    desc: string
}


const BookitInfo: FunctionComponent = () => {

    const bookitOpportunities: IBookitInfoCard[] = [
        {
            Icon: Smartphone,
            title: 'მარტივი დაჯავშნა',
            desc: 'დაჯავშნე ნებისმიერი ადგილი წამებში'
        },
        {
            Icon: ClockFading,
            title: 'ადგილების შემოწმება',
            desc: 'რეალურ დროში ადგილების შემოწმება და დაჯავშნა'
        },
        {
            Icon: Heart,
            title: 'ფავორიტების სია',
            desc: 'შეინახე შენი ფავორიტი ადგილები და დაჯავშნე  მომენტალურად'
        },
        {
            Icon: MapPin,
            title: 'აღმოაჩინე ყველაფერი',
            desc: 'რესტორანი, კაფე-ბარუ, სალონი, ვეტერინარი, კლინიკა...'
        },
        {
            Icon: Bell,
            title: 'შეხსენების ფუქნცია',
            desc: 'აღარ იდარდო ჯავშნების დამახსოვრებაზე, ჩვენ შეგახსნებთ'
        }
    ]

    return (
        <div id="about" className="bookit_info_wrapper grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="bookit_info-article flex flex-col gap-8">
                <div className="bookit_info-article_heading flex flex-col gap-2">
                    <div className="bookit_info-article_heading-title font-bold text-[32px]">
                        რა არის <span className="bg-linear-to-r from-[#FF3033] to-[#EF7800] bg-clip-text text-transparent">Gegmio?</span>
                    </div>
                    <div className="bookit_info-article_heading-text font-light text-[#a7a7a7]">
                        Gegmio  ძიებისა და ჯავშნის ბევრად მარტივი მეთოდია
                    </div>
                </div>
                <div className="bookit_info-list flex flex-col gap-6">
                    {bookitOpportunities.map((bookit, index) => (
                        <BookitInfoCard
                            key={index}
                            Icon={bookit.Icon}
                            title={bookit.title}
                            desc={bookit.desc}
                        />
                    ))}
                </div>
            </div>
            <div className="bookit_info-imgs relative h-full hidden lg:flex">
                <div className="bookit_info-img_1 absolute top-1/2 -translate-y-1/2">
                    <img src="/images/sm_phone_1.svg" alt="" />
                </div >
                <div className="bookit_info-img_2 absolute top-[47%] -translate-1/2 left-1/2 z-1">
                    <img src="/images/sm_phone_2.svg" alt="" />
                </div >
                <div className="bookit_info-img_3 absolute top-1/2 -translate-y-1/2 right-0">
                    <img src="/images/sm_phone_3.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default BookitInfo