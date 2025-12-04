import type { FunctionComponent } from "react"

import { Card, CardContent, CardDescription, CardTitle } from "../ui/card"

import { type LucideIcon } from "lucide-react"

interface IBookitInfoCardProps {
    Icon: LucideIcon
    title: string
    desc: string
}

const BookitInfoCard: FunctionComponent<IBookitInfoCardProps> = ({ Icon, title, desc }) => {
    return (
        <Card className="flex flex-row items-center border-none p-0 rounded-none bg-transparent gap-3 text-white">
            <div className="bg-linear-to-r from-[#FF3033] to-[#EF7800] rounded-sm">
                <Icon className="p-2.5 rounded-sm bg-black/70" size={40} />
            </div>
            <CardContent className="px-0 flex flex-col gap-0.5">
                <CardTitle className="font-semibold">{ title }</CardTitle>
                <CardDescription className="text-sm">{ desc }</CardDescription>
            </CardContent>
        </Card>
    )
}

export default BookitInfoCard