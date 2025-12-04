import type { FunctionComponent } from "react"

import { Card, CardContent, CardDescription, CardTitle } from "../ui/card"

interface IBusinessTypeProps {
    bgColor: string
    iconImg: string
    title: string
    desc: string
}

const BusinessType: FunctionComponent<IBusinessTypeProps> = ({ bgColor, iconImg, title, desc }) => {
    return (
        <div
            className='flex-1 grow rounded-[12px] w-full'
            style={{ backgroundColor: bgColor }}
        >
            <Card className="rounded-[12px] rounded-tr-[50px] h-[145px] min-w-[200px] bg-[#0D0D0D] border-2 border-[#2B2B2B] flex flex-col items-center gap-3">
                <CardTitle>
                    <img src={ iconImg } alt={ title } />
                </CardTitle>
                <CardContent className="flex flex-col items-center gap-1 text-center">
                    <CardTitle className="text-white text-sm">{ title }</CardTitle>
                    <CardDescription className="text-sm font-medium">{ desc }</CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}

export default BusinessType