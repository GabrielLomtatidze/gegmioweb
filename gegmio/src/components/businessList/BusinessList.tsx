import type { FunctionComponent } from "react"

import BusinessType from "../card/BusinessType"

interface IBusinessType {
    bgColor: string
    iconImg: string
    title: string
    desc: string
}

const businessType: IBusinessType[] = [
    {
        bgColor: 'rgb(193,0,237)',
        title: 'სალონი & სილამაზე',
        desc: 'ბარბერი, სალონი, სპა და ბევრი',
        iconImg: '/images/barber_icon.svg'
    },
    {
        bgColor: '#EF7800',
        title: 'რესტორანი & კაფე',
        desc: 'მაგიდის დაჯავშნა უმარტივესად',
        iconImg: '/images/restoran_icon.svg'
    },
    {
        bgColor: 'rgb(226,0,0)',
        title: 'ბარი & კლუბები',
        desc: 'ახალი ადგილების აღმოჩენა და ვიზიტი',
        iconImg: '/images/club_icon.svg'
    },
    {
        bgColor: 'rgb(254,233,0)',
        title: 'ცხოველის მოვლა',
        desc: 'შენი შიანური ცხოველის მოვლა',
        iconImg: '/images/animal_icon.svg'
    },
    {
        bgColor: 'rgb(0,224,244)',
        title: 'ჯანმრთელობა',
        desc: 'კონსულტაცია, და სხვა მრავალი სერვისი',
        iconImg: '/images/health_icon.svg'
    },
]

const BusinessList: FunctionComponent = () => {
    return (
        <div className="business_list-wrapper flex flex-col gap-8">

            <div className="business_list-title text-3xl font-bold text-center">
                ჩვენთან შეხვდებით <span className="bg-linear-to-r from-[#FF3033] to-[#EF7800] bg-clip-text text-transparent">ყველა დაწესებულებას</span>
            </div>

            <div className="cards_list flex gap-3 flex-wrap items-center justify-center">
                {businessType.map((business, index) => (
                    <BusinessType
                        key={index}
                        bgColor={business.bgColor}
                        title={business.title}
                        desc={business.desc}
                        iconImg={business.iconImg}
                    />
                ))}
            </div>

        </div>
    )
}

export default BusinessList