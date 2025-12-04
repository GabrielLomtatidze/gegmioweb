"use client"
import type { FunctionComponent } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar";


const Header: FunctionComponent = () => {

    
    return (
        <header className="border-b-2 border-b-[#242424] w-full flex justify-center bg-[#0F0F0F] sticky top-0 z-30 ">
            <div className="header_wrapper text-white flex justify-between items-center max-w-7xl w-full m-auto px-4 py-5 md:px-[100px]">
                <a href="/" className="logo">
                    <img src="/images/gegmioLogo.svg" alt="Gegmio" />
                </a>
                <div className="buttons hidden md:flex items-center gap-8">
                    <nav className="nav">
                        <ul className="flex font-medium text-sm gap-8">
                            <li><a href="/">სახლი</a></li>
                            <li><a href="/#about">ჩვენს შესახებ</a></li>
                            <li><a href="/#contact">კონტაქტი</a></li>
                        </ul>
                    </nav>
                    <a href="/" className="button bg-linear-to-r from-[#FF3033] to-[#EF7800] font-bold size-sm py-2 px-4 rounded-md cursor-pointer">
                        ბიზნესისთვის
                    </a>
                </div>
                <div className="sidebar_btn md:hidden">
                    <SidebarTrigger />
                </div>
            </div>
        </header>
    )
}

export default Header