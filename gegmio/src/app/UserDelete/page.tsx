import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { FunctionComponent } from "react";


const UserDelete: FunctionComponent = () => {

    return (
        <>
            <SidebarProvider defaultOpen={false} className="flex-col">

                <Header />
                <div className="w-full h-screen bg-[#0F0F0F]  flex justify-center">
                    <h1 className="text-white mt-40">To delete your account and all related data, please email us at info@gegmio.com
 using your registered email.

Your account will be permanently deleted within 30 days.</h1>
                </div>
                <Footer />
            </SidebarProvider>

        </>
    )

}


export default UserDelete;