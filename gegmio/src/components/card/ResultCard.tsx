import type { FunctionComponent } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

import { type LucideIcon } from "lucide-react"

interface IResultCardProps {
    Icon: LucideIcon
    title: string
    desc: string
}

const ResultCard: FunctionComponent<IResultCardProps> = ({ Icon, title, desc }) => {
    return (
        <div className="group relative max-w-[340px] w-full pt-[5px]">
            <div className="absolute top-0 left-0 h-[5px] w-0 group-hover:w-full bg-linear-to-r from-[#FF3033] to-[#EF7800] rounded-t-md transition-all duration-300"></div>

            <Card className="relative border-none hover:rounded-t-none gap-3 text-white bg-[#171717] duration-300 py-5 px-5 w-full hover:bg-[#17110e]">
                <CardHeader className="p-0">
                    <Icon size={35} className="bg-[#242424] p-2 rounded-md duration-300 group-hover:bg-linear-to-r group-hover:from-[#FF3033] group-hover:to-[#EF7800]" />
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-1">
                    <CardTitle className="font-semibold">{title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-[#a7a7a7]">{desc}</CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}

export default ResultCard