import { UserNavBar } from "@/components/navbar/user-navbar"
import { Search } from "@/components/navbar/search"
import UserPrivilegesSwitcher from "@/components/navbar/user-privileges-switcher"
import { Sidebar } from "@/components/sidebar/sidebar"
import FilesPage from "@/components/files/files"

export default function Home() {

  return (
    <main>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <UserPrivilegesSwitcher />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNavBar />
          </div>
        </div>
        <div className="border-t flex">
          <div style={{width:"15rem"}}>
            <div className="bg-background">
              <div className="">
                <Sidebar />
              </div>
            </div>
          </div>
          <div style={{width:"55rem"}}>
            <FilesPage />
          </div>
        </div>
      </div>
    </main>
  )
}
