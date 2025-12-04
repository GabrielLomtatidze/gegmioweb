import type { FunctionComponent } from "react"

import Landing from "@/components/lading/Landing"
import BusinessList from "@/components/businessList/BusinessList"
import BookitInfo from "@/components/bookitInfo/BookitInfo"
import Results from "@/components/results/Results"
import Opportunities from "@/components/opportunities/Opportunities"
import Contact from "../components/contact/Contact"

const Main: FunctionComponent = () => {
    return (
        <main className="flex-1 text-white w-full flex justify-center my-[66px]">
            <div className="main_wrapper flex flex-col gap-[150px] max-w-7xl w-full px-4 md:px-[100px]">
                <Landing />
                <BusinessList />
                <BookitInfo />
                <Results />
                <Opportunities />
                <Contact />
            </div>
        </main>
    )
}

export default Main
