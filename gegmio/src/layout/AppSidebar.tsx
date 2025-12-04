"use client"
import type { FunctionComponent } from "react"

import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, Sidebar, SidebarMenuButton, SidebarMenuItem, SidebarMenu, useSidebar } from "../components/ui/sidebar"

interface ILink {
    title: string
    url: string
}

const AppSidebar: FunctionComponent = () => {

    const links: ILink[] = [
        {
            title: 'სახლი',
            url: '/',
        },
        {
            title: 'ჩვენ შესახებ',
            url: '/#about',
        },
        {
            title: 'კონტაქტი',
            url: '/#contact',
        },
    ]

    const { setOpenMobile } = useSidebar()

    return (
        <Sidebar className="hidden_scrollbar z-50">
            <SidebarContent className="hidden_scrollbar p-5 bg-[#0F0F0F] text-white border-0 gap-6">
                <SidebarHeader className="p-0 flex flex-row px-2 font-bold text-4xl">
                    <img src="/images/gegmioLogo.svg" alt="BookIt" className="w-max h-auto" />
                    {/* <span className="text-[#a7a7a7] font-medium text-sm">ბიზნესის სამართავი პანელი</span> */}
                </SidebarHeader>
                <SidebarGroup className="flex-1 p-0">
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-3">
                            {links.map((link, index:number) => (
                                <SidebarMenuItem key={index} onClick={() => setOpenMobile(false)}>
                                    <SidebarMenuButton size='lg' asChild className="text-lg py-2 ">
                                        <a href={link.url} className="">{ link.title }</a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <a href={'https://gegmio.vercel.app/'} target="_blank" className="bg-linear-to-r from-[#FF3033] to-[#EF7800] text-white rounded-md p-2.5 text-lg">ბიზნესებისთვის</a>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar