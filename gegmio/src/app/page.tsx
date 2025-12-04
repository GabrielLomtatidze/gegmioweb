import Main from "@/layout/Main"
import AppSidebar from "@/layout/AppSidebar"

export default function Home() {
  
  return (
    <div className="bg-[#0F0F0F] min-h-screen flex flex-col m-auto">
        <AppSidebar />
        <Main />
    </div>
  );
}
